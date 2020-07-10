var permission = "%player_has_permission_bskyblock.island.maxhomes.2%";
var permission2 = "%player_has_permission_bskyblock.island.maxhomes.4%";
var permission3 = "%player_has_permission_bskyblock.island.maxhomes.6%";

function anything() {
  if (permission3 === "yes") {
    return "&a\u2587\u2587\u2587";
  } else if (permission2 === "yes") {
    return "&a\u2587\u2587&c\u2587";
  } else if (permission === "yes") {
    return "&a\u2587&c\u2587\u2587";
  } else {
    return "&c\u2587\u2587\u2587";
  }
}
anything()