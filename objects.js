var playlist = {odesza: 'Higher Ground'};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  var playlist = { Kanye: 'Gold Digger' };
delete playlist.artistName;
return playlist;
  
}