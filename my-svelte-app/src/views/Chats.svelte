<script>
  import { user } from "../stores/User";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";

  onMount(() => {
    if (!$user) {
      navigate("/Login", { replace: true });
    }
  });

  let conversations = [
    { person: "Usuario 1", messages: [] },
    { person: "Usuario 2", messages: [] },
    { person: "Usuario 3", messages: [] },
  ];

  let activeConversation = conversations[0];
  let newMessage = "";

  function switchConversation(conversation) {
    activeConversation = conversation;
  }

  function sendMessage() {
    if (newMessage.trim() !== "") {
      activeConversation.messages = [
        ...activeConversation.messages,
        newMessage,
      ];
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
      <li>
        <div class="message">{message}</div>
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
    list-style-type: none;
    padding: 0;
    margin: 0;
    align-self: flex-start;
  }

  .message-list li {
    margin-bottom: 10px;
  }

  .message-list > li > .message {
    background-color: #f9f8f781;
    padding: 8px;
    max-width: 70%;
    border-radius: 8px 8px 0 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    margin: 0%;
    word-wrap: break-word;
  }

  .input-container {
    position: sticky;
    display: flex;
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
