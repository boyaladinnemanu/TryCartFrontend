import React, { useState, useRef,useContext} from 'react';
import { Profilesidebarcont, Userimg, Userimgcont, Picedit } from "./styledComponent";
import { FaUser, FaHeart, FaShoppingCart, FaStar, FaCog } from "react-icons/fa";
import Usercontext from '../../Context/Usercontext';
import styled from 'styled-components';

const defaultAvatars = [
    "https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses-half-shaved-head_23-2149436187.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/premium-psd/3d-illustration-person-with-purple-hair-glasses_23-2149436204.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/premium-psd/3d-illustration-business-man-with-glasses_23-2149436193.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/premium-psd/3d-illustration-person-with-glasses-bow_23-2149436205.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-bald-person_23-2149436183.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436181.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/premium-psd/3d-illustration-person-with-leather-jacket_23-2149436206.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436196.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436182.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/premium-psd/3d-illustration-older-person-with-glasses_23-2149436203.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436199.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hat_23-2149436195.jpg?uid=R196432016&w=740",
    "https://img.freepik.com/premium-psd/3d-illustration-person-with-bow_23-2149436207.jpg?uid=R196432016&w=740"
  ];

const profilefeatures= [
    {
      id: "MY_PROFILE",
      name: "My Profile",
      icon: <FaUser />,
      isActive: false
    },
    {
      id: "MY_FAVORITES",
      name: "My Favorites",
      icon: <FaHeart />,
      isActive: false
    },
    {
      id: "MY_ORDERS",
      name: "My Orders",
      icon: <FaShoppingCart />,
      isActive: false,
    },
    {
      id: "MY_WISHLIST",
      name: "My Wishlist",
      icon: <FaStar />,
      isActive: false
    },
    {
      id: "MY_ACCOUNT",
      name: "My Account",
      icon: <FaCog />,
      isActive: false
    }
  ];
  


const FloatingContainer = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width:30%;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Avatarimg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const UploadBtn = styled.label`
  display: inline-block;
  margin-top: 10px;
  background-color: #45a5d9;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Avatarscont = styled.ul`
    display:flex;
    flex-wrap:wrap:
    gap:10px;
    list-style-type:none;
    padding-left:0px;
    margin-left:0px;
`
const AvatarOption = styled.li`
  height:40px;
  width:40px;
  border-radius:50%;
  border:0px;
  cursor: pointer;
`
const Profilesectioncont = styled.ul`
    display:flex;
    flex-direction:column;
    gap:20px;
    list-style-type:none;
    margin-left:0px;
    width:100%;
    padding-left:0px;
    align-self:flex-start;
    margin:0px;
`
const Profilesections = styled.li`
    font-family:"Roboto",sans serif;
    font-size:15px;
    display:flex;
    color:${props=>props.isActive?"#000000":"#ffffff"};
    border-radius:10px;
    gap:10px;
    cursor:pointer;
    font-weight:bold;
    padding:10px;
`

const Profilesidebar = ({ activetab, setActivetab }) => {
  const {profileupdate} = useContext(Usercontext)
  const user = localStorage.getItem("user");
  const { Name,dob,gender,phone,address,avatar} = JSON.parse(user);

  const [showPopover, setShowPopover] = useState(false);
  const [features,setFeatures] = useState(profilefeatures);
  const [Avatar,setAvatar]= useState(avatar||"");
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const editRef = useRef(null);

  const togglePopover = () => {
    if (editRef.current) {
      const rect = editRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 5, // Add scrollY for page scroll
        left: rect.left + window.scrollX
      });
      setShowPopover(!showPopover);
    }
  };

  const data = {Name,dob,gender,address,phone}

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("User selected a file:", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        profileupdate({...data,avatar:reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  

  const profileupdatefun =(url)=>{
    setAvatar(url)
    profileupdate({...data,avatar:url})
    
  }

  const handelactivetab = (id) => {
    setFeatures(
      profilefeatures.map((each) =>
        each.id === id
          ? { ...each, isActive: !each.isActive }
          : each
      )
    );
    setActivetab(id)
  };

  console.log(features)

  return (
    <Profilesidebarcont>
      <Userimgcont>
        <Userimg src={Avatar} alt="userpic" />
        <Picedit ref={editRef} size={20} onClick={togglePopover} />
      </Userimgcont>
    

        <Profilesectioncont>
            {features.map((each)=><Profilesections key={each.id} isActive={each.id === activetab} onClick={()=>handelactivetab(each.id)}>{each.icon} {each.name}</Profilesections>)}
        </Profilesectioncont>

      {showPopover && (
        <FloatingContainer top={position.top} left={position.left}>
          <Avatarscont style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {defaultAvatars.map((each,index)=>
                <AvatarOption key={index}>
                    <Avatarimg src={each} alt="Aimg" onClick={()=>profileupdatefun(each)}/>
                </AvatarOption>
            )}
          </Avatarscont>
          <UploadBtn>
            Select from device
            <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleFileChange} />
          </UploadBtn>
        </FloatingContainer>
      )}
    </Profilesidebarcont>
  );
};

export default Profilesidebar;
