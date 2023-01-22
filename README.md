# LINE Messageing API recipient fetcher

A small NodeJS utils for LINE bot webhook for fetching recipient ID.

According to [LINE Messaging API Documention](https://developers.line.biz/en/docs/messaging-api/overview/), 
recipient ID can be `groupID`, `userID` or `roomID`, it will be used in LibreNMS to send message to a group or a user. Here is the step to get it.

## How to use?

Here is the step for setup a line notify.

### Step 1. Go to Line developers and register an account.

[https://developers.line.biz/](https://developers.line.biz/)

Using your real Line account to register.

### Step 2. Add a new channel

1. Create a provider if you don't have.
1. Create a channel, choosing Messaging API, and continue fill up the forms.

	- Channel type: **Messaging API**
	- Provider: *(Choose your provider)*
	- Company or owner's country or region: *(Choose your region)*
	- Channel name:   
	*(It will be your LINE bot's name by default,* **it cannot edit it later** *)*
	- Channel description:  
	*(It will be your LINE bot's description by default)*
	- Category: *(Choose a proper category)*
	- Subcategory: *(Choose a proper subcategory)*

	then create it.

1. Go to "Messaging API" tab of your channel, here listing some important value.

	- `Bot basic ID` and `QR code` is your LINE bot's ID and QR code.
	- `Channel access token (long-lived)`, will use it later, keep it safe.

1. Use your real Line account add your LINE bot as a friend.

### Step 3. Setup a webhook to fetch recipient ID


Using following small NodeJS program and `ngrok` for temporally https.
Following step is using Mac for demonstration. Linux also can be apply these steps.

1. Open a folder

	```
	$ mkdir myLineBot
	```

1. Do npm initialize
 
	```
	$ npm init -y
	```

1. Install express package

	```
	$ npm install express
	```

1. Add and edit `index.js`

	```
	$ vi index.js
	```
	
	The `index.js` contents is on gist.
	
1. Run the program

	```
	$ node index.js
	```

1. using `ngrok` expose port to public

	```
	$ ngrok http 3000
	```
	
1. Go to "Messaging API" tab of your channel, fill up Webhook URL to `https://<your ngrok domain>/webhook`

1. If you want to let LINE bot send message to a yourself, use your real account to send a message to your LINE bot.  
  
  program will print out the `userID` in console.

  sample value:

	```
	{"type":"user","userId":"U527xxxxxxxxxxxxxxxxxxxxxxxxxc0ee"}
	```


1. If you want to let LINE bot send message to a group, do the following steps.

	- Add your LINE bot into group
	- Use your real account to send a message to group

	program will print out the `groupID` in console, it will be Recipient ID, keep it safe.

	sample value:
		
	```
{"type":"group","groupId":"Ce51xxxxxxxxxxxxxxxxxxxxxxxxxx6ef","userId":"U527xxxxxxxxxxxxxxxxxxxxxxxxxc0ee"}
	```