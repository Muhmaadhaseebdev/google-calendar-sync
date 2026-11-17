import test from 'node:test';import assert from 'node:assert/strict';import {reconcile} from '../src/sync.js';
test('newer remote is pulled',()=>assert.equal(reconcile({id:'1',updatedAt:'2026-01-01T00:00:00Z'},{id:'1',updatedAt:'2026-01-02T00:00:00Z'}).action,'pull'));
test('missing remote is pushed',()=>assert.equal(reconcile({id:'1',updatedAt:'2026-01-01T00:00:00Z'},null).action,'push'));
