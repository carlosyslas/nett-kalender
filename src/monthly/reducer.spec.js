import { entities } from "./reducer";
import { FETCH_MONTH_EVENTS } from "./actions";
import { ADD_EVENT, UPDATE_EVENT } from "../events/actions";

const deliverCodingChallenge = {
  id: "00841621-bea5-478c-8b33-0576ffd161ba",
  start: "2019-08-19T07:00:00Z",
  content: "Deliver coding challenge",
  color: 1
};
const uploadYouTubeVideo = {
  id: "78c05f52-6e82-41a2-8111-a0bb09577fbd",
  content: "Upload YouTube video",
  start: "2019-08-28T13:00:00.000+02:00",
  color: 2
};

describe("entities reducer", () => {
  it("returns the initial state by default", () => {
    const initialState = Symbol("any initial state");
    const unknownAction = { type: "unknown" };

    expect(entities(initialState, unknownAction)).toEqual(initialState);
  });

  describe("FETCH_MONTH_EVENTS_COMPLETED", () => {
    it("saves the event ids grouped by year and date", () => {
      const action = {
	type: FETCH_MONTH_EVENTS.COMPLETED,
	payload: [deliverCodingChallenge, uploadYouTubeVideo]
      };

      expect(entities({}, action)).toEqual({
	"2019": {
	  "08-19": ["00841621-bea5-478c-8b33-0576ffd161ba"],
	  "08-28": ["78c05f52-6e82-41a2-8111-a0bb09577fbd"]
	}
      });
    });
  });

  describe("ADD_EVENT_COMPLETED", () => {
    it("saves the event ids grouped by year and date", () => {
      const action = {
	type: ADD_EVENT.COMPLETED,
	payload: uploadYouTubeVideo
      };

      expect(entities({}, action)).toEqual({
	"2019": {
	  "08-28": ["78c05f52-6e82-41a2-8111-a0bb09577fbd"]
	}
      });
    });
  });

  describe("UPDATE_EVENT_COMPLETED", () => {
    it("saves the event ids grouped by year and date", () => {
      const initialState = {
	"2019": {
	  "08-30": ["78c05f52-6e82-41a2-8111-a0bb09577fbd"]
	}
      };
      const action = {
	type: UPDATE_EVENT.COMPLETED,
	payload: uploadYouTubeVideo
      };

      expect(entities(initialState, action)).toEqual({
	"2019": {
	  "08-28": ["78c05f52-6e82-41a2-8111-a0bb09577fbd"],
	  // TODO: The next entry should be cleared in the feture.
	  "08-30": ["78c05f52-6e82-41a2-8111-a0bb09577fbd"]
	}
      });
    });
  });
});
