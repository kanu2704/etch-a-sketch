const applyButton = document.querySelector('.apply');
    const resetButton = document.querySelector('.reset');
    const input = document.getElementById('size');
    const box = document.querySelector('.box');

    function randomColor(count) {
        
        let color = "";
        if (count===1) {
            color = "lavender";
        } else if (count===2) {
            color = "thistle";
        } else if (count===3) {
            color = "violet";
        } else if (count===4) {
            color = "plum";
        } else if (count===5) {
            color = "Roku Purple";
        } else if(count==6){
            color = "indigo";
        }else{
            color="purple";
        }
        return color;
    }


    applyButton.addEventListener('click', () => {
        const edge = input.value;
        box.innerHTML = '';
        

        for (let i = 0; i < edge; i++) {
            const outerDiv = document.createElement('div');
            outerDiv.classList.add('outer');
            for (let j = 0; j < edge; j++) {
                let count=0;
                const innerDiv = document.createElement('div');
                innerDiv.classList.add('inner');
                const size = 450 / edge;
                innerDiv.style.width = `${size}px`;
                innerDiv.style.height = `${size}px`;
                innerDiv.style.border = 'none';
                innerDiv.addEventListener('mouseenter', () => {
                    count+=1;
                    innerDiv.style.backgroundColor=randomColor(count);
                });

                resetButton.addEventListener('click', () => {
                    innerDiv.style.backgroundColor='white';
                    count=0;
                });
                outerDiv.appendChild(innerDiv);
            }
            box.appendChild(outerDiv);
        }
    });