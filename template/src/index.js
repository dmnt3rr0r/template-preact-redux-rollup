/* @flow */
/*
  if your eslint is configured correctly
  you should see errors on both import statements
  the var declarations the z var not being used,
  and possibly a few errors. In the case of the flow
  type check you should see an error on the go(x)
  line that says that x is not of the correct type and
  you should NOT see an error on the go func def when
  typing s to string.
*/

import { createStore } from 'redux';
import { render as prender, Component, h } from 'preact';

var x = 1;
var z = "arg";

const go = (s: string) => `hello ${s}`;

go(x);

