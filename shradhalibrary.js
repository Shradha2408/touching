function touching(m,f) {
    if (m.x - f.x < f.width/2 + m.width/2
      && f.x - m.x < f.width/2 + m.width/2
      && m.y - f.y < f.height/2 + m.height/2
      && f.y - m.y < f.height/2 + m.height/2) {
        return true;
   
  }
  else {
    
    return false;
  }
  }