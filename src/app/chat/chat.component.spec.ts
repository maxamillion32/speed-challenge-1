/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChatComponent } from './chat.component';

describe('Component: Chat', () => {
  it('should create an instance', inject([ChatComponent], (chat: ChatComponent) => {
    expect(chat).toBeTruthy();
  }));
});
