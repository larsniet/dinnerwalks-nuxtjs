<template>
  <div>
    <section class="walk">
      <div class="banner">
        <img
          class="banner--welcome"
          src="@/assets/images/walktemplate/welkom.png"
          alt="Welkom badge"
        />
        <img
          class="banner_bolletjes--img1"
          src="@/assets/images/walklocal_blue.png"
          alt="Image"
        />
        <img
          class="banner_bolletjes--img2"
          src="@/assets/images/walklocal_yellow.png"
          alt="Image"
        />
        <img
          class="banner_bolletjes--img3"
          src="@/assets/images/walklocal_purple.png"
          alt="Image"
        />
        <img
          class="banner_bolletjes--img4"
          src="@/assets/images/walklocal_blue.png"
          alt="Image"
        />
        <img
          class="banner_bolletjes--img5"
          src="@/assets/images/walklocal_yellow.png"
          alt="Image"
        />
        <img
          class="banner_bolletjes--img6"
          src="@/assets/images/walklocal_purple.png"
          alt="Image"
        />
      </div>

      <div class="content">
        <h3 class="walk--title">in {{ walk.locatie }}</h3>
        <a
          class="downloadBtn"
          :href="`/walks/${walk.locatie}/${walk.locatie}.pdf`"
          target="_blank"
          >Download PDF</a
        >
      </div>

      <div id="app-cover">
        <div id="player">
          <div id="player-track">
            <div id="album-name"></div>
            <div id="track-name"></div>
            <div id="track-time">
              <div id="current-time"></div>
              <div id="track-length"></div>
            </div>
            <div id="s-area">
              <div id="ins-time"></div>
              <div id="s-hover"></div>
              <div id="seek-bar"></div>
            </div>
          </div>
          <div id="player-content">
            <div id="album-art">
              <img
                src="@/assets/images/walklocal_blue.png"
                class="active"
                id="_1"
              />
              <img src="@/assets/images/walklocal_yellow.png" id="_2" />
              <img src="@/assets/images/walklocal_purple.png" id="_3" />
              <img src="@/assets/images/walklocal_blue.png" id="_4" />
              <img src="@/assets/images/walklocal_yellow.png" id="_5" />
              <div id="buffer-box">Laden ...</div>
            </div>
            <div id="player-controls">
              <div class="control">
                <div class="button" id="play-previous">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                    />
                  </svg>
                </div>
              </div>
              <div class="control">
                <div class="button" id="play-pause-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id="play-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id="pause-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div class="control">
                <div class="button" id="play-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  name: "Walk",
  middleware: "authenticated",
  layout: "walk",
  asyncData() {
    return {
      walk: {
        locatie: ""
      }
    };
  },
  mounted() {
    this.walk.locatie = this.$route.params.walk;

    var playerTrack = $("#player-track"),
      albumName = $("#album-name"),
      trackName = $("#track-name"),
      albumArt = $("#album-art"),
      sArea = $("#s-area"),
      seekBar = $("#seek-bar"),
      trackTime = $("#track-time"),
      insTime = $("#ins-time"),
      sHover = $("#s-hover"),
      playPauseButton = $("#play-pause-button"),
      playIcon = $("#play-icon"),
      pauseIcon = $("#pause-icon"),
      tProgress = $("#current-time"),
      tTime = $("#track-length"),
      seekT,
      seekLoc,
      seekBarPos,
      cM,
      ctMinutes,
      ctSeconds,
      curMinutes,
      curSeconds,
      durMinutes,
      durSeconds,
      playProgress,
      bTime,
      nTime = 0,
      buffInterval = null,
      tFlag = false,
      albums = [
        this.walk.locatie,
        this.walk.locatie,
        this.walk.locatie,
        this.walk.locatie,
        this.walk.locatie
      ],
      trackNames = [
        "Podcast - 1",
        "Podcast - 2",
        "Podcast - 3",
        "Podcast - 4",
        "Podcast - 5"
      ],
      albumArtworks = ["_1", "_2", "_3", "_4", "_5"],
      trackUrl = [
        `https://admin.dinnerwalks.nl/${this.walk.podcast1}`,
        `https://admin.dinnerwalks.nl/${this.walk.podcast2}`,
        `https://admin.dinnerwalks.nl/${this.walk.podcast3}`,
        `https://admin.dinnerwalks.nl/${this.walk.podcast4}`,
        `https://admin.dinnerwalks.nl/${this.walk.podcast5}`
      ],
      playPreviousTrackButton = $("#play-previous"),
      playNextTrackButton = $("#play-next"),
      currIndex = -1,
      audio,
      currAlbum,
      currTrackName,
      currArtwork;

    function playPause() {
      setTimeout(function() {
        if (audio.paused) {
          playerTrack.addClass("active");
          albumArt.addClass("active");
          checkBuffering();
          playIcon.hide();
          pauseIcon.show();
          audio.play();
        } else {
          playerTrack.removeClass("active");
          albumArt.removeClass("active");
          clearInterval(buffInterval);
          albumArt.removeClass("buffering");
          playIcon.show();
          pauseIcon.hide();
          audio.pause();
        }
      }, 300);
    }

    function showHover(event) {
      seekBarPos = sArea.offset();
      seekT = event.clientX - seekBarPos.left;
      seekLoc = audio.duration * (seekT / sArea.outerWidth());

      sHover.width(seekT);

      cM = seekLoc / 60;

      ctMinutes = Math.floor(cM);
      ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

      if (ctMinutes < 0 || ctSeconds < 0) return;

      if (ctMinutes < 0 || ctSeconds < 0) return;

      if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
      if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

      if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
      else insTime.text(ctMinutes + ":" + ctSeconds);

      insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
    }

    function hideHover() {
      sHover.width(0);
      insTime
        .text("00:00")
        .css({ left: "0px", "margin-left": "0px" })
        .fadeOut(0);
    }

    function playFromClickedPos() {
      audio.currentTime = seekLoc;
      seekBar.width(seekT);
      hideHover();
    }

    function updateCurrTime() {
      nTime = new Date();
      nTime = nTime.getTime();

      if (!tFlag) {
        tFlag = true;
        trackTime.addClass("active");
      }

      curMinutes = Math.floor(audio.currentTime / 60);
      curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

      durMinutes = Math.floor(audio.duration / 60);
      durSeconds = Math.floor(audio.duration - durMinutes * 60);

      playProgress = (audio.currentTime / audio.duration) * 100;

      if (curMinutes < 10) curMinutes = "0" + curMinutes;
      if (curSeconds < 10) curSeconds = "0" + curSeconds;

      if (durMinutes < 10) durMinutes = "0" + durMinutes;
      if (durSeconds < 10) durSeconds = "0" + durSeconds;

      if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
      else tProgress.text(curMinutes + ":" + curSeconds);

      if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
      else tTime.text(durMinutes + ":" + durSeconds);

      if (
        isNaN(curMinutes) ||
        isNaN(curSeconds) ||
        isNaN(durMinutes) ||
        isNaN(durSeconds)
      )
        trackTime.removeClass("active");
      else trackTime.addClass("active");

      seekBar.width(playProgress + "%");

      if (playProgress == 100) {
        playIcon.show();
        pauseIcon.hide();
        seekBar.width(0);
        tProgress.text("00:00");
        albumArt.removeClass("buffering").removeClass("active");
        clearInterval(buffInterval);
      }
    }

    function checkBuffering() {
      clearInterval(buffInterval);
      buffInterval = setInterval(function() {
        if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
        else albumArt.removeClass("buffering");

        bTime = new Date();
        bTime = bTime.getTime();
      }, 100);
    }

    function selectTrack(flag) {
      if (flag == 0 || flag == 1) ++currIndex;
      else --currIndex;

      if (currIndex > -1 && currIndex < albumArtworks.length) {
        if (flag == 0) {
          playIcon.show();
          pauseIcon.hide();
        } else {
          albumArt.removeClass("buffering");
          playIcon.hide();
          pauseIcon.show();
        }

        seekBar.width(0);
        trackTime.removeClass("active");
        tProgress.text("00:00");
        tTime.text("00:00");

        currAlbum = albums[currIndex];
        currTrackName = trackNames[currIndex];
        currArtwork = albumArtworks[currIndex];

        audio.src = trackUrl[currIndex];

        nTime = 0;
        bTime = new Date();
        bTime = bTime.getTime();

        if (flag != 0) {
          audio.play();
          playerTrack.addClass("active");
          albumArt.addClass("active");

          clearInterval(buffInterval);
          checkBuffering();
        }

        albumName.text(currAlbum);
        trackName.text(currTrackName);
        albumArt.find("img.active").removeClass("active");
        $("#" + currArtwork).addClass("active");
      } else {
        if (flag == 0 || flag == 1) --currIndex;
        else ++currIndex;
      }
    }

    function initPlayer() {
      audio = new Audio();

      selectTrack(0);

      audio.loop = false;

      playPauseButton.on("click", playPause);

      sArea.mousemove(function(event) {
        showHover(event);
      });

      sArea.mouseout(hideHover);

      sArea.on("click", playFromClickedPos);

      $(audio).on("timeupdate", updateCurrTime);

      playPreviousTrackButton.on("click", function() {
        selectTrack(-1);
      });
      playNextTrackButton.on("click", function() {
        selectTrack(1);
      });
    }
    initPlayer();
  }
};
</script>

<style scoped>
/* Banner */
.walk {
}
.banner {
  max-height: 200px;
  width: 100%;
}
.banner--welcome {
  width: 130px;
  height: 100%;
}
.banner_bolletjes--img1 {
  position: absolute;
  width: 45px;
  top: 30px;
  height: auto;
  left: 70px;
}
.banner_bolletjes--img2 {
  position: absolute;
  width: 50px;
  top: 100px;
  height: auto;
  left: 50px;
}
.banner_bolletjes--img3 {
  position: absolute;
  width: 20px;
  top: 80px;
  height: auto;
  left: 30px;
}
.banner_bolletjes--img4 {
  position: absolute;
  width: 45px;
  top: 100px;
  height: auto;
  right: 40px;
}
.banner_bolletjes--img5 {
  position: absolute;
  width: 20px;
  top: 140px;
  height: auto;
  right: 110px;
}
.banner_bolletjes--img6 {
  position: absolute;
  width: 50px;
  top: 30px;
  height: auto;
  right: 60px;
}

/* Content */
.content {
  margin-top: 20px;
}
.walk--title {
  color: #ffb496;
  font-size: 33px;
  margin-bottom: 100px;
  font-family: "DK Whale Song";
}
.downloadBtn {
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: #ffb496;
  padding: 20px 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transition: 0.6s all ease;
  z-index: 3;
  text-decoration: none;
}
.downloadBtn:hover {
  background-color: #8d543c;
  box-shadow: 0px 15px 20px #8d543c;
}

/* Audio speler */
#app-cover {
  position: fixed;
  bottom: 20px;
  right: 0;
  left: 0;
  width: 430px;
  height: 100px;
  margin: -4px auto;
}
#player {
  position: relative;
  bottom: 0;
  max-width: 100vw;
  height: 100%;
  z-index: 3;
}
#player-track {
  position: absolute;
  top: 0;
  right: 15px;
  left: 15px;
  padding: 13px 22px 10px 184px;
  background-color: #fff7f7;
  border-radius: 15px 15px 0 0;
  transition: 0.3s ease top;
  z-index: 1;
}
#player-track.active {
  top: -92px;
}
#album-name {
  color: #54576f;
  font-size: 17px;
  font-weight: bold;
  text-transform: capitalize;
}
#track-name {
  color: #acaebd;
  font-size: 13px;
  margin: 2px 0 13px 0;
}
#track-time {
  height: 12px;
  margin-bottom: 3px;
  overflow: hidden;
}
#current-time {
  float: left;
}
#track-length {
  float: right;
}
#current-time,
#track-length {
  color: transparent;
  font-size: 11px;
  background-color: #ffe8ee;
  border-radius: 10px;
  transition: 0.3s ease all;
}
#track-time.active #current-time,
#track-time.active #track-length {
  color: #f86d92;
  background-color: transparent;
}
#s-area,
#seek-bar {
  position: relative;
  height: 4px;
  border-radius: 4px;
}
#s-area {
  background-color: #ffe8ee;
  cursor: pointer;
}
#ins-time {
  position: absolute;
  top: -29px;
  color: #fff;
  font-size: 12px;
  white-space: pre;
  padding: 5px 6px;
  border-radius: 4px;
  display: none;
}
#s-hover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  opacity: 0.2;
  z-index: 2;
}
#ins-time,
#s-hover {
  background-color: #3b3d50;
}
#seek-bar {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background-color: #fd6d94;
  transition: 0.2s ease width;
  z-index: 1;
}
#player-content {
  position: relative;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 30px 80px #656565;
  border-radius: 15px;
  z-index: 2;
  width: 95%;
  margin: 0 auto;
}
#album-art {
  position: absolute;
  top: -40px;
  width: 115px;
  height: 115px;
  margin-left: 40px;
  transform: rotateZ(0);
  transition: 0.3s ease all;
  box-shadow: 0 0 0 10px #fff;
  border-radius: 50%;
  overflow: hidden;
}
#album-art.active {
  top: -60px;
  box-shadow: 0 0 0 4px #fff7f7, 0 30px 50px -15px #afb7c1;
}
#album-art:before {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 20px;
  height: 20px;
  margin: -10px auto 0 auto;
  background-color: #d6dee7;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #fff;
  z-index: 2;
}
#album-art img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
}
#album-art img.active {
  opacity: 1;
  z-index: 1;
}
#album-art.active img.active {
  z-index: 1;
  animation: rotateAlbumArt 3s linear 0s infinite forwards;
}
@keyframes rotateAlbumArt {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
#buffer-box {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  height: 13px;
  color: #1f1f1f;
  font-size: 13px;
  font-family: Helvetica;
  text-align: center;
  font-weight: bold;
  line-height: 1;
  padding: 6px;
  margin: -12px auto 0 auto;
  background-color: rgba(255, 255, 255, 0.19);
  opacity: 0;
  z-index: 2;
}
#album-art img,
#buffer-box {
  transition: 0.1s linear all;
}
#album-art.buffering img {
  opacity: 0.25;
}
#album-art.buffering img.active {
  opacity: 0.8;
  filter: blur(2px);
  -webkit-filter: blur(2px);
}
#album-art.buffering #buffer-box {
  opacity: 1;
}
#player-controls {
  width: 250px;
  height: 100%;
  margin: 0 5px 0 141px;
  float: right;
  overflow: hidden;
}
.control {
  width: 33.333%;
  float: left;
  padding: 12px 0;
}
.button {
  width: 26px;
  height: 26px;
  padding: 25px;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
}
@media only screen and (max-width: 450px) {
  .button {
    width: 26px;
    height: 26px;
    padding: 20px;
  }
  #album-art {
    width: 80px;
    height: 80px;
  }
  #player-track {
    padding: 13px 22px 10px 130px;
  }
}
.button svg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #9aa0a7;
  text-align: center;
  line-height: 1;
}
.button,
.button svg {
  transition: 0.2s ease all;
}
.button:hover {
  background-color: #d6d6de;
}
.button:hover svg {
  color: #fff;
}
#ytd-url {
  display: block;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px 14px;
  margin: 20px;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  background-color: #ae5f87;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(174, 95, 135, 0.86);
  z-index: 125;
}
</style>
