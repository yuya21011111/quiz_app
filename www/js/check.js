function audio() {
// ページが読み込まれたら音声再生
    document.getElementById('btn_audio_t').currentTime = 0;
    document.getElementById('btn_audio_t').pause();
    document.getElementById('btn_audio').play(); 
 }

 function audio_t() {
    // ページが読み込まれたら音声再生
    document.getElementById('btn_audio_t').play(); 
}