
    <script>
      var timeout,interval
      var threshold = 5000; 
      var secondsleft=threshold;

      window.onload = function(){startschedule();}

      function startChecking(){
        secondsleft-=1000;
        document.querySelector(&quot;.wait&quot;);  
        if(secondsleft == 0) {
          
          clearInterval(interval);
          document.querySelector(&quot;.wait&quot;).style.display=&quot;none&quot;;
          document.querySelector(&quot;.to&quot;).style.display=&quot;&quot;;
        }
      }

      function startschedule(){
        clearInterval(interval);
        secondsleft=threshold;
        document.querySelector(&quot;.wait&quot;);  
        interval = setInterval(function(){ startChecking();},1000)              
      }

      function resetTimer(){
        startschedule();
      }
    </script>
    <div class='wait'>
      <center>
        <span>Tunggu Bentar...</span>
      </center>
    </div>
    <style type='text/css'>.to {text-align: center;}</style>

    <div class='to' style='display: none;'>
      <a href='#download' onclick='generate()'>
        Klik 100x Disini!
      </a>
    </div>
