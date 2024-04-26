<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hi Music</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="arjit.css">
   

</head>
<script src="arjit.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="..." crossorigin="anonymous"></script>
<body>
    
    <header>
        <div class="menu_side">
            <a href="index.php"> <h1>Hi Music</h1></a>
            <div class="playlist">
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i>Playlist</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i>Last Played</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i>Recommended</h4>
            </div>

            <div class="menu_song">

                <li class="songItem">
                    <span>01</span>
                    <img src="audio/arjit singh/posters/1.jpeg" alt="">
                    <h5>Sooraj duba hain <br>
                        <div class="subtitle">arjit singh</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="1"></i>
                </li>


                <li class="songItem">
                    <span>02</span>
                    <img src="audio/arjit singh/posters/2.jpeg" alt="">
                    <h5> Bolna <br>
                        <div class="subtitle">arjit singh</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="2"></i>
                </li>

                <li class="songItem">
                    <span>03</span>
                    <img src="audio/arjit singh/posters/3.jpeg" alt="">
                    <h5>Gerua <br>
                        <div class="subtitle">arjit singh</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="3"></i>
                </li>

                <li class="songItem">
                    <span>04</span>
                    <img src="audio/arjit singh/posters/4.jpeg" alt="">
                    <h5> Hawayein <br>
                        <div class="subtitle">arjit singh</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="4"></i>
                </li>

                <li class="songItem">
                    <span>05</span>
                    <img src="audio/arjit singh/posters/5.jpeg" alt="">
                    <h5> Ik vari aa  <br>
                        <div class="subtitle">arjit singh </div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="5"></i>
                </li>

                <li class="songItem">
                    <span>06</span>
                    <img src="audio/arjit singh/posters/6.jpeg" alt="">
                    <h5>Janam Janam  <br>
                        <div class="subtitle">arjit singh</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="6"></i>
                </li>

                <li class="songItem">
                    <span>07</span>
                    <img src="audio/arjit singh/posters/7.jpeg" alt="">
                    <h5>Main Tera <br>
                        <div class="subtitle">arjit singh</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
                </li>

                <li class="songItem">
                    <span>08</span>
                    <img src="audio/arjit singh/posters/8.jpeg" alt="">
                    <h5>Naina <br>
                        <div class="subtitle">arjit singh</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="8"></i>
                </li>

                <li class="songItem">
                    <span>09</span>
                    <img src="thumbnails/download.jpeg" alt="">
                    <h5>Kehte h khud <br>
                        <div class="subtitle">arjit singh</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="9"></i>
                </li>

            </div>



        </div>


        <div class="song_side">
            <nav>
                <ul>
                    <li>Discover <span></span></li>
                    <li>My Library</li>
                    <li>Radio</li>
                </ul>
                <div class="search">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="Kalank">
                </div>
                <div class="user">
                    <img src="thumbnails/user.jpg" alt="">
                </div>
            </nav>

            <div class="content">
                <h1>Arjit Singh</h1>
                <p>लेके जान ही जाएगा मेरी
                    कातिल हर तेरा बहाना हुआ <br>
                    तुझसे ही शुरु, तुझपे ही ख़तम
                    मेरे प्यार का फ़साना हुआ</p>
                <div class="buttons">
                    <button>Play</button>
                    <button> <i class="bi bi-plus-lg"></i> Follow</button>
                </div>
            </div>

            <div class="popular_songs">
                <div class="h4">
                    <h4>Popular Songs</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_song_left" onclick="ScrollLeft_pop()" ></i>
                        <i class="bi bi-arrow-right-short" id="pop_song_right" onclick="ScrollRight_pop()" ></i>
                    </div>
                </div>

                <div class="pop_songs">


                    <li class="songItem">
                        <div class="img_play">
                            <img src="audio/arjit singh/posters/10.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="10"></i>

                        </div>
                        <h5>Rabta Title track <br>
                            <div class="subtitle">arjit singh</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="audio/arjit singh/posters/11.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="11"></i>

                        </div>
                        <h5>Roke na Ruke  <br>
                            <div class="subtitle">arjit singh</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="audio/arjit singh/posters/12.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="12"></i>

                        </div>
                        <h5>Sawre <br>
                            <div class="subtitle">arjit singh</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="audio/arjit singh/posters/3.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="13"></i>

                        </div>
                        <h5>Soch na sake <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="audio/arjit singh/posters/4.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="14"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="audio/arjit singh/posters/5.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="15"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="thumbnails/6.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="16"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="thumbnails/7.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="17"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="thumbnails/8.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="18"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="thumbnails/1.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="19"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="thumbnails/10.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="20"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="thumbnails/11.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="21"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="thumbnails/12.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="22"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="thumbnails/8.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="23"></i>

                        </div>
                        <h5>On My Way <br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>

                </div>
            </div>

            <div class="popular_artists">
                <div class="h4">
                    <h4>Popular Artists</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_artist_left" onclick="ScrollLeft_artist()" ></i>
                        <i class="bi bi-arrow-right-short" id="pop_artist_right" onclick="ScrollRight_artist()" ></i>
                    </div>
                </div>

                <div class="items pop_artists">


                <li>
                        <a href="arjit.php"><img src="thumbnails/arjit.webp" alt=""></a>
                    </li>
                    <li>
                       <a href="honey.php"> <img src="thumbnails/Honey-Singh.jpg" alt=""></a>
                    </li>
                    <li>
                        <img src="thumbnails/Vijay-Prakash.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/Singer-sonu-nigam-singer.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/Singer-Shreya-Goshal.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/Singer-Mohit-Chauhan.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/Singer-jubin-nautiyal.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/Singer-javed-ali-singer.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/Sachet.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/neha.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/lata.jpeg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/Honey-Singh.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/arjit.webp" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/lata.jpeg" alt="">
                    </li></li>
                    <li>
                        <img src="thumbnails/lata.jpeg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/Honey-Singh.jpg" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/arjit.webp" alt="">
                    </li>
                    <li>
                        <img src="thumbnails/lata.jpeg" alt="">
                    </li>


                </div>


            </div>





        </div>


        <div class="master_play">
            <div class="wave" id="wave" >
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="thumbnails/8.jpeg" alt="" id="poster_master_play">
            <h5 id="title">Pehle Bhi main
                <div class="subtitle">Arjit Singh</div>
            </h5>
            <div class="icon">
                <i class="bi shuffle bi-music-note-beamed">Next</i>
                <i class="bi bi-skip-start-fill" id="back" ></i>
                <i class="bi playBtn bi-play-fill" id="masterPlay" onclick="play()" ></i>
                <i class="bi bi-skip-end-fill" id="next"></i>
                <a href="" id="download_music" download="" ><i class="bi bi-download" ></i></a>
            </div>
            <span id="currentStart">0:00</span>
            <div class="bar">
                <input type="range" id="seek" min="0" max="100">
                <div class="bar2" id="bar2"></div>
                <div class="dot"></div>
            </div>
            <span id="currentEnd">0:30</span>
            <div class="vol">
                <i class="bi bi-volume-up-fill" id="vol_icon"></i>
                <input type="range" id="vol" min="0" max="100">
                <div class="vol_bar"></div>
                <div class="dot" id="vol_dot"></div>
            </div>

        </div>

    </header>

</body>

</html>