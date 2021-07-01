import axios from "axios";
import { useContext, useState } from "react";
import "./write.css";
import { Context } from "../../context/Context"
import { Multiselect } from "multiselect-react-dropdown"


export default function Write() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [categories, setCategories] = useState([])
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)

  const categorys = [
    { Category: 'Branding', id: 1, name: 'Branding' },
    { Category: 'Character Design', id: 2 },
    { Category: 'Illustration', id: 3 },
    { Category: 'Print', id: 4 }
  ]

  const [options] = useState(categorys)

  const style = {
    option: { // To change css for dropdown options
      backgroundColor: "#edd3ff",
    },

    chips: { // To change css chips(Selected options)
      background: "#ff81b8",
    },

    searchBox: { // To change search box element look
      border: "none",
      fontSize: "10px",
    },

    optionContainer: { // To change css for option container 
      border: "none",
      color: "#ff81b8"
    }
  }

  function handleChange(selectedList, selectedItem) {
    console.log(selectedItem)
    var listica = selectedList.map(function (item) {
      return item.Category
    })
    setCategories(listica)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(categories)
    const newPost = {
      username: user.username,
      title,
      desc,
      categories
    }
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename;
      try {
        await axios.post("/upload", data)
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost)
      window.location.replace("/post/" + res.data._id)
    } catch (err) { }
  }
  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>

          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        {/* <label for="categoris">Choose a category:</label>
        <select id="categoris" name="categoris" className="categoris">
          <option value="branding">Branding</option>
          <option value="character design">Character Design</option>
          <option value="print">Print</option>
          <option value="illustration">Illustration</option>
        </select> */}
        <div className="categoris">
          <Multiselect options={options} displayValue={"Category"} className="select" style={style} onSelect={handleChange} />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
