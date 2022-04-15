//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.replace(/\s+/g, '-').toLowerCase();
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.subclasses)
        // console.log(data.subclasses[0].name)
        // console.log(data.subclasses[1].name)
        data.subclasses.forEach( obj => {console.log(obj.name)
            // CREATE AN LI
            const li = document.createElement('li')
            // ADD TEXT TO LI
            li.textContent = obj.name
            // APPEND THE LI TO THE UL
            document.querySelector('ul').appendChild(li)
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

