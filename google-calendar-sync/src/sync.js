/** Resolve two versions of an event. Version clocks are ISO strings supplied by the client. */
export function reconcile(local, remote) {
 if (!local) return {action:'pull', event:remote};
 if (!remote) return {action:'push', event:local};
 if (local.id !== remote.id) throw new Error('event IDs must match');
 const left = Date.parse(local.updatedAt), right = Date.parse(remote.updatedAt);
 if (Number.isNaN(left) || Number.isNaN(right)) throw new Error('invalid timestamp');
 if (left === right) return {action:'noop',event:local};
 return left > right ? {action:'push',event:local} : {action:'pull',event:remote};
}
