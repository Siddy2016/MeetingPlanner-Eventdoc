define({ "api": [
  {
    "type": "emit",
    "url": "activate-email",
    "title": "Sending activation email",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;activate-email&quot;)</b> has to be emitted when a user signs up to send activation email.</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                    \"email\":string,\n                    \"firstName\":string,\n                    \"lastName\" : string,\n                    \"activateUserToken\":string\n                }",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitActivateEmail"
  },
  {
    "type": "emit",
    "url": "create-meeting",
    "title": "Create meeting",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;create-meeting&quot;)</b> has to be emitted while creating a meeting.It will automatically send meeting created email and meeting will also be automatically scheduled 1 minute before start of the meeting.</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"adminId\" : string,\n                            \"adminFullName\" : string,\n                            \"adminUserName\" : string,\n                            \"userId\" : string,\n                            \"userFullName\" : string,\n                            \"userEmail\" : string,\n                            \"start\" : date,\n                            \"end\" : date,\n                            \"place\" : string,\n                            \"title\" : string\n                        }",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitCreateMeeting"
  },
  {
    "type": "emit",
    "url": "delete-meeting",
    "title": "Delete meeting",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;delete-meeting&quot;)</b> has to be emitted while deleting a meeting.It will automatically send meeting deletion email and cancel the scheduled email.</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"meetingId\" : string,\n                            \"adminId\" : string,\n                            \"adminFullName\" : string,\n                            \"adminUserName\" : string,\n                            \"userId\" : string,\n                            \"userFullName\" : string,\n                            \"userEmail\" : string,\n                            \"start\" : date,\n                            \"end\" : date,\n                            \"place\" : string,\n                            \"title\" : string\n                        }",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitDeleteMeeting"
  },
  {
    "type": "emit",
    "url": "edit-meeting",
    "title": "Edit meeting",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;edit-meeting&quot;)</b> has to be emitted while saving an edited meeting.It will automatically send meeting edited email and meeting will also be automatically rescheduled 1 minute before start of the meeting.</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"meetingId\" : string,\n                            \"adminId\" : string,\n                            \"adminFullName\" : string,\n                            \"adminUserName\" : string,\n                            \"userId\" : string,\n                            \"userFullName\" : string,\n                            \"userEmail\" : string,\n                            \"start\" : date,\n                            \"end\" : date,\n                            \"place\" : string,\n                            \"title\" : string\n                        }",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitEditMeeting"
  },
  {
    "type": "emit",
    "url": "forgot-password",
    "title": "Sending change password email",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;forgot-password&quot;)</b> has to be emitted when a user inputs his email to receive forget password email.</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                \"email\":string,\n                \"resetPasswordToken\":string\n            }",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitForgotPassword"
  },
  {
    "type": "emit",
    "url": "join-room",
    "title": "Joining the current room",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event (&quot;join-room&quot;) has to be emitted when admin opens the user page to check his dashboard. Data that has to be passed here is <b>userId</b></p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitJoinRoom"
  },
  {
    "type": "emit",
    "url": "set-admin",
    "title": "Setting admin online",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;set-admin&quot;)</b> has to be emitted when a admin comes online. This is to verify if the user is admin user only. The data that has to be passed is <b>authToken</b>.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitSetAdmin"
  },
  {
    "type": "emit",
    "url": "set-user",
    "title": "Setting user online",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;set-user&quot;)</b> has to be emitted when a user comes online. This is to verify if the user is normal user only</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitSetUser"
  },
  {
    "type": "listen",
    "url": "auth-error",
    "title": "Emitting auth error on fail of token verification",
    "version": "0.0.1",
    "group": "Listen",
    "description": "<p>This event <b>(&quot;auth-error&quot;)</b> has to be listened by the current room and will be triggered if there comes any auth-token error</p>",
    "examples": [
      {
        "title": "The example data as output",
        "content": "{\n                            \"status\": 500,\n                            \"error\": Please provide correct auth token\n                        }",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenAuthError"
  },
  {
    "type": "listen",
    "url": "delete-meeting",
    "title": "deleting meeting in realtime for user and admin",
    "version": "0.0.1",
    "group": "Listen",
    "description": "<p>This event <b>(&quot;delete-meeting&quot;)</b> has to be listened by both admin and user that will notify them in real time that meeting is deleted.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenDeleteMeeting"
  },
  {
    "type": "listen",
    "url": "start-room",
    "title": "Starting the room",
    "version": "0.0.1",
    "group": "Listen",
    "description": "<p>This event <b>(&quot;start-room&quot;)</b> has to be listened to start any room. Only then the other events of room and meeting get to work.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenStartRoom"
  },
  {
    "type": "listen",
    "url": "update-meeting",
    "title": "Updating meeting in realtime for user and admin",
    "version": "0.0.1",
    "group": "Listen",
    "description": "<p>This event <b>(&quot;update-meeting&quot;)</b> has to be listened by both admin and user that will notify them in real time that meeting is created or edited.</p>",
    "examples": [
      {
        "title": "The example data as output",
        "content": "{\n                        error:false,\n                        message : 'Meeting created',\n                        status : 200,\n                        data :\n                            {\n                                \"meetingId\" : string,\n                                \"adminId\" : string,\n                                \"adminFullName\" : string,\n                                \"adminUserName\" : string,\n                                \"userId\" : string,\n                                \"userFullName\" : string,\n                                \"userEmail\" : string,\n                                \"start\" : date,\n                                \"end\" : date,\n                                \"place\" : string,\n                                \"title\" : string\n                            }\n                    }",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenUpdateMeeting"
  },
  {
    "type": "listen",
    "url": "userId",
    "title": "Meeting Reminder",
    "version": "0.0.1",
    "group": "Listen",
    "description": "<p>This event <b>(&quot;userId&quot;)</b> has to be listened by the online user that will notify them in real time that is about to start in 1 minute.</p>",
    "examples": [
      {
        "title": "The example data as output",
        "content": "{\n                        \"meetingId\" : string,\n                        \"adminId\" : string,\n                        \"adminFullName\" : string,\n                        \"adminUserName\" : string,\n                        \"userId\" : string,\n                        \"userFullName\" : string,\n                        \"userEmail\" : string,\n                        \"start\" : date,\n                        \"end\" : date,\n                        \"place\" : string,\n                        \"title\" : string\n                    }",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenUserid"
  },
  {
    "type": "listen",
    "url": "verifyUser",
    "title": "Verification of user",
    "version": "0.0.1",
    "group": "Listen",
    "description": "<p>This event <b>(&quot;verifyUser&quot;)</b> has to be listened on the user's end to verify user or admin authentication.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenVerifyuser"
  }
] });
