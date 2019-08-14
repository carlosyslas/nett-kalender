import React from "react";
import { shallow } from "enzyme";
import Month from "./Month";

describe("Month", () => {
  it("renders", () => {
    const events = {
      "08-19": [
	{
	  id: "00841621-bea5-478c-8b33-0576ffd161ba",
	  start: "2019-08-19T07:00:00Z",
	  content: "Deliver coding challenge",
	  color: 1
	}
      ]
    };
    const tree = shallow(
      <Month date={new Date(2018, 7, 19, 0, 0)} events={events} />
    );

    expect(tree.debug()).toMatchSnapshot();
  });
});
