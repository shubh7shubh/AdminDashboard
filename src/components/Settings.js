import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Settings = () => {
  const navigate = useNavigate();
  const [emotionName, setEmotionName] = useState("");
  const [deleteEmotion, setDeleteEmotion] = useState("");
  const [updateEmotion, setUpdateEmotion] = useState("");



  const handleAddEmotion = async () => {
    try {
      const response = await axios.post("https://cominks.app/admin/addEmotion", {
        emotion: emotionName
      });
      console.log(response,"addEmotionsssss");
      toast(response.statusText)
      setEmotionName("")
      
    } catch (error) {
      console.log(error);
    }
  };



  const handleUpdateEmotion = async () => {
    try {
      const response = await axios.put("https://cominks.app/admin/updateEmotion", {
        updateEmotion: updateEmotion
      });
      console.log(response,"updateEmotionsssss");
      toast(response.data.message)
      setUpdateEmotion("")
    } catch (error) {
      console.log(error);
    }
  };





const handleDeleteEmotion = async () => {
  try {
    const response = await axios.delete(`https://cominks.app/admin/deleteEmotion/${deleteEmotion}`);
    console.log(response,"deleteEmotionsssss");
    toast(response.data.message)
    setDeleteEmotion("")
  } catch (error) {
    console.log(error);
  }
};





  return <>
  <Sidebar/>
<div className="settings-container">
<h1>Settings</h1>

<div style={{marginTop:"125px"}} className="addEmotion">
      <input
        type="text"
        value={emotionName}
        placeholder="Enter Emotion"
        onChange={e => setEmotionName(e.target.value)}
      />
      <button onClick={handleAddEmotion}>Add Emotion</button>
    </div>

<div className="addEmotion">
      <input
        type="text"
        value={updateEmotion}
        placeholder="Update Emotion"
        onChange={e => setUpdateEmotion(e.target.value)}
      />
      <button onClick={handleUpdateEmotion}>Update Emotion</button>
    </div>


    <div className="addEmotion">
      <input
        type="text"
        value={deleteEmotion}
        placeholder="Enter Emotion to delete"
        onChange={e => setDeleteEmotion(e.target.value)}
      />
      <button onClick={handleDeleteEmotion}>Delete Emotion</button>
    </div>
</div>
    </>
}

export default Settings
