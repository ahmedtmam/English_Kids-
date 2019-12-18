var lcalstor = function (key, event) {
   this.key = key
   this.event = function () {
      if (localStorage.getItem(key) === null)
         window.localStorage.setItem(key, event)
      else {
         var ar = new Array(localStorage.getItem(key))
         ar.push(event)
         window.localStorage.setItem(key, ar)
      }
   }
}
function objectsevent(action, target, date) {
   this.action = action
   this.target = target
   this.date = date
}

setInterval(function () {

   if (localStorage.length != 0) {
      var objectevent = []
      var objecteventsplit = []

      for (var i = 0; i < localStorage.length; i++) {
         objectevent.push(localStorage.getItem(localStorage.key(i)))
      }

      for (var i = 0; i < objectevent.length; i++) {
         var splevent = objectevent[i].split(",")
         for (var j = 0; j < splevent.length; j++) {
            var arr = splevent[j].split("@")
            var objectcreat = new objectsevent(arr[0], arr[1], arr[2])
            objecteventsplit.push(objectcreat)

         }
      }


      $.ajax({
         "type": "POST",
         "url": "http://localhost/test/conectdata.php",
         "data": { "data": JSON.stringify(objecteventsplit) },
         "beforeSend": function () {
            console.log("data is send")
            console.log(objecteventsplit)
         },
         "success": function (response) {
            console.log("sucsses ")
            console.log(response)
            localStorage.clear()
         }
      })


   }
   else
      console.log("local is clear")
}, 5000)

window.addEventListener("load", function (e) {
   var onload = e.type + "@" + e.target + "@" + new Date()
   var e1 = new lcalstor("load", onload)
   e1.event()
})

window.addEventListener("unload", function (e) {
   var onunload = e.type + "@" + e.target + "@" + new Date()
   var e1 = new lcalstor("unload", onunload)
   e1.event()

})

var submit = document.getElementById("submit")
submit.addEventListener("click", makeid)

submit.addEventListener("click", function (e) {
   var btngener = e.type + "@" + e.target + "@" + new Date()

   if (localStorage.getItem("clickgenerate") == null)
      window.localStorage.setItem("clickgenerate", btngener)

   else {
      var ar = new Array(localStorage.getItem("clickgenerate"))
      ar.push(btngener)
      window.localStorage.setItem("clickgenerate", ar)
   }
})

function makeid() {
  
   var text = document.getElementById("t")
   var numb = text.value
   var result = ''
   var characters = 'abcdefghijklmnopqrstuvwxyz'
   var Lengthcharacters = characters.length
   if (numb > 0 && numb < 27) {
      for (var i = 0; i < numb; i++) {
         result += characters.charAt(Math.floor(Math.random() * Lengthcharacters))
      } createbutton(result)
   }
}

function createbutton(result) {
   
   var showchar = document.getElementById("showchar")
   if (showchar.innerHTML != null)
      showchar.innerHTML = null
   for (var i = 0; i < result.length; i++) {
      var buttonchar = document.createElement("input")
      showchar.appendChild(buttonchar)
      buttonchar.setAttribute("type", "submit")
      buttonchar.setAttribute("value", result[i])
      buttonchar.setAttribute("class", "char")

      buttonchar.addEventListener("click", function (e) {

         var btnchar = e.type + "@" + e.target.value + "@" + new Date()
         if (localStorage.getItem("clickalphabet") == null)
            window.localStorage.setItem("clickalphabet", btnchar)
         else {
            var ar = new Array(localStorage.getItem("clickalphabet"))
            ar.push(btnchar)
            window.localStorage.setItem("clickalphabet", ar)
         }

         var showimg = document.getElementById("showimg")
         var image = document.createElement("img")



         showimg.innerHTML = null
         showimg.appendChild(image)
         image.src = "im/" + e.target.value + ".jpg"
         image.setAttribute("class", "charimg")
      })

   }
}





