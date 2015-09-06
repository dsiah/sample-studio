import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    DOWNLOAD: null,
    UPDATE_FILE: null,
    TOGGLE_VIEW: null,
    SAMPLE_ADDED: null,  // Client asks for audio from youtube
    REGISTER_SAMPLE: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null,
    SAMPLE_FETCHED: null // Server goes and loads the youtube audio
  })
};
