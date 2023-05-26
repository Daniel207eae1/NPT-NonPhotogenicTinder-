<script>
  import { user } from "../stores/User";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import LoadingContainer from "../components/LoadingContainer.svelte";
  import { writable } from "svelte/store";

  onMount(async () => {
    if (!$user) {
      navigate("/Login", { replace: true });
    }
    ObtenerRefConversacion().then(() => {
      ObtenerConversacion();
    });
  });

  const uid = localStorage.getItem("uid");

  let conversations = [
    { person: "ss", messages: [] },
    { person: "aa", messages: [] },
  ];

  const ObtenerRefConversacion = async () => {
    const response = await fetch("http://localhost:3000/GetRefChats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid }),
    });
    const data = await response.json();
    console.log(data);
    if (data != null) {
      let conversationsRef = data;
      conversationsRef.forEach((conversation) => {
        conversations.push({ person: conversation.id, messages: [] });
      });
      console.log(conversations);
      localStorage.setItem("ref", conversationsRef);
    }
  };

  console.log(conversations);
  const ObtenerConversacion = async () => {
    const idchat = activeConversation.person;
    const response = await fetch("http://localhost:3000/GetChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, idchat }),
    });
    const data = await response.json();
    if (data != null) {
      console.log(data);
      activeConversation = data;
    }
  };

  let activeConversation = conversations[0];
  console.log(activeConversation);
  let newMessage = "";

  function switchConversation(conversation) {
    activeConversation = conversation;
  }

  function sendMessage() {
    if (newMessage.trim() !== "") {
      const message = {
        content: newMessage,
        sender: "Usuario Actual",
      };
      activeConversation.messages = [...activeConversation.messages, message];
      newMessage = "";
    }
  }

  function sendMessageOtherUser() {
    if (newMessage.trim() !== "") {
      const message = {
        content: newMessage,
        sender: "Otro Usuario",
      };
      activeConversation.messages = [...activeConversation.messages, message];
      newMessage = "";
    }
  }
</script>

<Navbar />
<div class="chat-container">
  <div>
    <h2>Chats</h2>
    <ul>
      {#each conversations as conversation}
        <li>
          <button on:click={() => switchConversation(conversation)}>
            Chat con {conversation.person}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>

<main>
  <div class="participant">
    <h2>{activeConversation.person}</h2>
  </div>
  <ul class="message-list">
    {#each activeConversation.messages as message}
      <li
        class={message.sender === "Usuario Actual"
          ? "message sent"
          : "message received"}
      >
        <div class="message-container">
          <div class="message">{message.content}</div>
        </div>
      </li>
    {/each}
  </ul>

  <div class="input-container">
    <input
      type="text"
      bind:value={newMessage}
      placeholder="Escribe un mensaje..."
    />
    <button on:click={sendMessage}>Enviar</button>
    <button on:click={sendMessageOtherUser}>Enviar como Otro Usuario</button>
  </div>
</main>

<style>
  main {
    position: absolute;
    top: 100px;
    right: 100px;
    width: 50%;
    bottom: 50px;
    padding: 20px;
    background-color: #e2cc94;
    overflow: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  .participant {
    position: sticky;
    top: 0;
    background-color: #c2a6488d;
    padding: 1px;
    text-align: center;
  }

  .chat-container {
    position: absolute;
    top: 100px;
    left: 100px;
    width: 30%;
    bottom: 50px;
    padding: 20px;
    background-color: #ac98668d;
    overflow: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  .message-list {
    max-height: 78%;
    overflow-y: auto;
    list-style-type: none;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    margin-top: 1rem;
    align-self: flex-start;
  }

  .message-list li {
    display: flex;
    margin-bottom: 10px;
  }

  .message-list li .message {
    background-color: #f9f8f781;
    padding: 8px;
    border-radius: 8px 8px 0 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    margin: 0%;
    word-wrap: break-word;
  }

  .message-list li.sent {
    justify-content: flex-end;
  }

  .message-list li.received {
    justify-content: flex-start;
  }

  .message-list li .message-container {
    max-width: 70%;
  }

  .input-container {
    position: absolute;
    display: flex;
    bottom: 5%;
    right: 10%;
    left: 10%;
    margin-top: 10px;
  }

  .input-container input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .input-container button {
    padding: 5px 10px;
    margin-left: 5px;
    border: none;
    border-radius: 4px;
    background-color: #a05526;
    color: white;
    cursor: pointer;
  }
</style>
