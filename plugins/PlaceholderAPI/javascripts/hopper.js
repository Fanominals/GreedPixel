var permission = "%superior_island_hoppers_limit%";

function anything() {
  if (permission >= 40) {
    return "&a\u2587\u2587\u2587\u2587";
  } else if (permission >= 32) {
    return "&a\u2587\u2587\u2587&c\u2587";
  } else if (permission >= 24) {
    return "&a\u2587\u2587&c\u2587\u2587";
  } else if (permission >= 16) {
    return "&a\u2587&c\u2587\u2587\u2587";
  } else {
    return "&c\u2587\u2587\u2587\u2587";
  }
}
anything()
