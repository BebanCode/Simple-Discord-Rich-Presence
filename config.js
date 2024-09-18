require("dotenv").config();
module.exports = {
    client: {
        token: process.env.TOKEN || 'PUT_YOUR_TOKEN_HERE'
    },
    rich_presence: {
        application_id: process.env.APPLICATION_ID || "1204093137027338241", // You can get one here https://support-dev.discord.com/hc/en-us/articles/360028717192-Where-can-I-find-my-Application-Team-Server-ID
        presence_type: process.env.PRESENCE_TYPE || "", // This can be PLAYING, COMPETING, WATCHING, LISTENING, CUSTOM, STREAMING ( You need to fill stream_url for STREAMING type )
        stream_url: process.env.STREAM_URL || "https://www.twitch.tv/animebasetv", // OPTIONAL, You need to fill this with a stream url recommended from twitch
        presence_title: process.env.PRESENCE_TITLE || "", // The title of the rich presence
        presence_details: process.env.PRESENCE_DETAILS || "", // The details of the rich presence
        presence_state: process.env.PRESENCE_STATE || "", // The presence of the rich presence
        activity_presence: process.env.ACTIVITY_PRESENCE || "", // The activity presence, this can be online, idle, dnd
 
        presence_largeImage: process.env.LARGE_IMAGE || "https://cdn.discordapp.com/avatars/1186307158657220710/b9b90ee453a8a5113b29eec07a1ce86f.webp?size=2048", // The large image url
        presence_largeImageText: process.env.LARGE_IMAGE_TEXT || "", // The lage image text ( This will appear when you hover to the image )
        presence_smallImage: process.env.SMALL_IMAGE || "https://cdn.discordapp.com/attachments/1220017559877980203/1285138845192556648/3dgifmaker57073.gif?ex=66ebd151&is=66ea7fd1&hm=956068ffa133ee133d113109b19f942d2700f72560643761944d462d29e8f2ad&", // The small image url
        presence_smallImageText: process.env.SMALL_IMAGE_TEXT || "", // The small image text ( This will appear when you hover to the image )
    },
    buttons: {
        Button1_name: process.env.BUTTON1_NAME || "", // The button's name
        Button1_url: process.env.BUTTON1_URL || "", // The button's url

        Button2_name: process.env.BUTTON2_NAME || "", // The button's name
        Button2_url: process.env.BUTTON2_URL || "", // The button's url
    }
}

