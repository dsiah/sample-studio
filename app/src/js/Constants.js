import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    TOGGLE_VIEW: null,
    SAMPLE_ADDED: null,  // Client asks for audio from youtube
    SAMPLE_FETCHED: null // Server goes and loads the youtube audio
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};