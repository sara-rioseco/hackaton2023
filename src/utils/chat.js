// Chatbot.js
import Chatbot from "https://cdn.jsdelivr.net/gh/roxsyVel910/FlowiseChatEmbed@latest/dist/web.js";

const initializeChatbot = () => {

    async function query(data) {
        const response = await fetch(
          "https://konecta-2.onrender.com/api/v1/prediction/734e6ba4-432f-4b5b-a732-d2d0320490e3",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }
        );
        const result = await response.json();
        return result;
      }
      
      query({"question": "Hey, how are you?"}).then((response) => {
        console.log(response);
      });

    Chatbot.init({
        chatflowid: "734e6ba4-432f-4b5b-a732-d2d0320490e3",
        apiHost: "https://konecta-2.onrender.com",
        
        chatflowConfig: {
          // topK: 2
        },
        theme: {
          button: {
            backgroundColor: "#CE0F69",
            right: 20,
            bottom: 20,
            size: "medium",
            iconColor: "white",
            customIconSrc:
              "https://raw.githubusercontent.com/sara-rioseco/hackaton2023/main/src/assets/img/avatar-chat.png",
          },
          chatWindow: {
            welcomeMessage: "Hola!, Bienvenido a Konecta Empleos",
            backgroundColor: "#ffffff",
            height: 500,
            width: 400,
            fontSize: 16,
            poweredByTextColor: "#303235",
            botMessage: {
              backgroundColor: "#f7f8ff",
              textColor: "#303235",
              showAvatar: true,
              avatarSrc:
                "https://raw.githubusercontent.com/sara-rioseco/hackaton2023/main/src/assets/img/avatar-chat.png",
            },
            userMessage: {
              backgroundColor: "#3B81F6",
              textColor: "#ffffff",
              showAvatar: true,
              avatarSrc:
                "https://www.svgrepo.com/show/165196/user.svg",
            },
            textInput: {
              placeholder: "Querid@ Postulate, consulte por el estado de tu proceso",
              backgroundColor: "#ffffff",
              textColor: "#303235",
              sendButtonColor: "#3B81F6",
            },
          },
        },
      });
};

export default initializeChatbot;
