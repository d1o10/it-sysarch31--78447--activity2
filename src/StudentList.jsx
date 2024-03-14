import React from "react";
import Student from "./Student";
import "./index.css"; // Assuming you have a separate CSS file for your styles

const students = [
  { photo: "https://media.discordapp.net/attachments/1213855379230957652/1215644532293505044/316129440_1539821396443271_8852203729991166468_n.png?ex=65fd8032&is=65eb0b32&hm=1dc878053f14e47f02645a58655aef254399c40973ad5a93c284722e27422d18&=&format=webp&quality=lossless&width=360&height=701", name: "Mark Joseph", email: "@pakboi" },
  { photo: "https://cdn.discordapp.com/attachments/1213855379230957652/1217114542505459712/tuxedo_diff.png?ex=6602d93f&is=65f0643f&hm=9b4ea1f01937f695b43cf6ef3adb6e87b4f7b144bb527addf866aa930434d5d0&", name: "Proffesor Francis", email: "@gustavo" },
  { photo: "https://media.discordapp.net/attachments/1213855379230957652/1217115934708334692/image.png?ex=6602da8b&is=65f0658b&hm=930983c8c414f0c7c1fb1e40f398755a028484c0e611cfe20a757a974b28e35b&=&format=webp&quality=lossless", name: "Daniel Dela Cuest",email: "@DanceWithMyChix " },
  { photo: "https://cdn.discordapp.com/attachments/1213855379230957652/1217118343199457351/image.png?ex=6602dcc9&is=65f067c9&hm=bb14b689b7d6b09e3d6b1e2b4f6010fd56c95eb367afc6ac72f670f35281a8b6&", name: "Guard Moralde", email: "@AltheGuard" },
  { photo: "https://media.discordapp.net/attachments/1213855379230957652/1217115567581036727/received_348799648065904.jpg?ex=6602da34&is=65f06534&hm=4335aad948b868773ada6012a76b3190b0cb8ef00677167661fa792c2c6de6d9&=&format=webp&width=347&height=701", name: "Dela Cuest 2", email: "@sepuscousin" },
  
];

const StudentList = () => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <Student key={index} photo={student.photo} name={student.name} email={student.email} />
      ))}
    </div>
  );
};

export default StudentList;