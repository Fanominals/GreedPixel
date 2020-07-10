var permission = "%superior_island_level_raw%";

function anything() {
  if (permission >= 1000) {
    return "&a\u2587\u2587\u2587\u2587";
  } else if (permission >= 750) {
    return "&a\u2587\u2587\u2587\u2587";
  } else if (permission >= 500) {
    return "&a\u2587\u2587\u2587&c\u2587";
  } else if (permission >= 300) {
    return "&a\u2587\u2587&c\u2587\u2587";
  } else if (permission >= 100) {
    return "&a\u2587&c\u2587\u2587\u2587";
  } else {
    return "&c\u2587\u2587\u2587\u2587";
  }
}
anything()
