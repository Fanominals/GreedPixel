var permission = "%superior_island_team_limit%";


function anything() {
  if (permission === "14") {
    return "&a\u2587\u2587\u2587\u2587\u2587";
  } else if (permission === "12") {
    return "&a\u2587\u2587\u2587\u2587&c\u2587";
  } else if (permission === "10") {
    return "&a\u2587\u2587\u2587&c\u2587\u2587";
  } else if (permission === "8") {
    return "&a\u2587\u2587&c\u2587\u2587\u2587";
  } else if (permission === "6") {
    return "&a\u2587&c\u2587\u2587\u2587\u2587";
  } else {
    return "&c\u2587\u2587\u2587\u2587\u2587";
  }
}
anything();