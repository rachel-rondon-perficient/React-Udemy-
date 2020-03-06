/* import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate("change",  {
      target: { value: 'new comment'}
    });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {

  });

  it('when a form is submitted, text area gets emptied', () => {

  });
});


it ('has a text area and a button', () => {
  expect(wrapped.find("textarea").length).toEqual(2);
  expect(wrapped.find("button").length).toEqual(2);
});

it ('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate("change",  {
    target: { value: 'new comment'}
  });

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('when form is submitted, text area gets emptied', () => {
  wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment'}
  });

  wrapped.update();
  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('34434334');

}); */ 
