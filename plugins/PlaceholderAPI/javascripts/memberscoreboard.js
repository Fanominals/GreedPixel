var permission = "%superior_island_exists%";


function anything() {
  if (permission === "Yes") {
    return "%superior_island_team_size%/%superior_island_team_limit%";
  } else {
    return "No Island";
  }
}
anything()