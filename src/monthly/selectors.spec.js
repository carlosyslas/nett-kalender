import { selectYearEvents } from "./selectors";

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

describe("selectYearEvents", () => {
  it("it returns the events in a year", () => {
    const state = {
      monthly: {
	entities: {
	  "2019": {
	    "08-19": ["00841621-bea5-478c-8b33-0576ffd161ba"],
	    "08-28": ["78c05f52-6e82-41a2-8111-a0bb09577fbd"],
	    // NOTE: Even though the id is duplicated and not cleared
	    // by the reducer, the selector is able to just return it once. This has to be fixed later in the reducer.
	    "08-30": ["78c05f52-6e82-41a2-8111-a0bb09577fbd"]
	  }
	}
      },
      events: {
	[deliverCodingChallenge.id]: deliverCodingChallenge,
	[uploadYouTubeVideo.id]: uploadYouTubeVideo
      }
    };

    expect(selectYearEvents(state, { year: "2019" })).toEqual({
      "08-19": [deliverCodingChallenge],
      "08-28": [uploadYouTubeVideo],
      "08-30": []
    });
  });
});
