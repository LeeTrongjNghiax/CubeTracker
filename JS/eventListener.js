changeState = (e) => 
  e.setAttribute(
    "data-state", 
    e.getAttribute("data-state") == "Not Learned" ? "Learning" : 
      e.getAttribute("data-state") == "Learning" ? "Learned" : "Not Learned"
  );