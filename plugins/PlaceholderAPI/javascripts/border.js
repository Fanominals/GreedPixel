var permission = "%superior_island_radius%";

function anything() {
  if (permission >= 125) {
    return "&a\u2587\u2587\u2587\u2587";
  } else if (permission >= 100) {
    return "&a\u2587\u2587\u2587&c\u2587";
  } else if (permission >= 75) {
    return "&a\u2587\u2587&c\u2587\u2587";
  } else if (permission >= 50) {
    return "&a\u2587&c\u2587\u2587\u2587";
  } else {
    return "&c\u2587\u2587\u2587\u2587";
  }
}
anything()
