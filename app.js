async function getData(){
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = await res.json()
    return(data)
        }
        getData()

        let popr = 0
        let niep = 0
        let niepoprawneP = document.querySelector('#niep')
        let poprawneP = document.querySelector('#pop')
    async function losowanie(){
            const nazwa1 = document.querySelector('#nazwa1')
            const nazwa2 = document.querySelector('#nazwa2')
            const flaga1 = document.querySelector('#flaga1')
            const flaga2 = document.querySelector('#flaga2')

            var countries = await getData()
            var country1 = countries[Math.floor(Math.random() * countries.length)]
            var country2 = countries[Math.floor(Math.random() * countries.length)]
            if(country1.name.common === country2.name.common){
                country2 = countries[Math.floor(Math.random() * countries.length)]
            }
            flaga1.style.width = `100%`
            flaga1.style.height =`75%`
            flaga2.style.width = `100%`
            flaga2.style.height =`75%`
            flaga1.setAttribute('src',country1.flags.png)
            flaga2.setAttribute('src',country2.flags.png)
            nazwa1.innerHTML = country1.name.common
            nazwa2.innerHTML = country2.name.common
            poprawneP.innerHTML = `Poprawne ${popr}`
            niepoprawneP.innerHTML = `Niepoprwane ${niep}`


     
           }        
           losowanie()
           
        async   function lewy(){
            const kraj1 = document.querySelector('#kraj1')
            const kraj2 = document.querySelector('#kraj2')
            var countries = await getData()
            var country1 = countries[Math.floor(Math.random() * countries.length)]
            var country2 = countries[Math.floor(Math.random() * countries.length)]
            if(country1.name.common === country2.name.common){
                country2 = countries[Math.floor(Math.random() * countries.length)]
            }
            if(niep==5){
                alert(`Przegrałeś`)
                window.location.reload(true)

            }
    if(country1.population>country2.population){

            popr++
        losowanie()
    }
     if(country2.population>country1.population){

            niep++
            losowanie()
    }
           }
           async   function prawy(){
            const kraj1 = document.querySelector('#kraj1')
            const kraj2 = document.querySelector('#kraj2')
            var countries = await getData()
            var country1 = countries[Math.floor(Math.random() * countries.length)]
            var country2 = countries[Math.floor(Math.random() * countries.length)]
            if(country1.name.common === country2.name.common){
                country2 = countries[Math.floor(Math.random() * countries.length)]
            }
            if(niep==5){
                alert(`Przegrałeś`)
                window.location.reload(true)

            }
    if(country1.population>country2.population){

            niep++
        losowanie()
    }
     if(country2.population>country1.population){

            popr++
            losowanie()
    }
           }
