AFRAME.registerComponent("bullets",{
    init:function(){
        this.createBullets();
    },

    createBullets:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key == "z"){
                var bullet = document.createElement("a-entity");

                bullet.setAttribute("geometry",{
                    primitive : "cylinder",
                    radius : 0.1,
                    height : 0.5,
                })

                bullet.setAttribute("material",{
                    color : "#000",
                })


                var cam = document.querySelector("#camera");
                var pos = cam.getAttribute("position");
                var ang = cam.getAttribute("rotation");
                ang.x += 90;
                console.log(ang);

                bullet.setAttribute("rotation",{x:ang.x,y:ang.y,z:ang.z});

                b = bullet.getAttribute("rotation");

                console.log(b);
                
                bullet.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})

                var camera = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3();

                camera.getWorldDirection(direction);
                
                bullet.setAttribute("rotation",direction)
                bullet.setAttribute("velocity",direction.multiplyScalar(-10))

                var scene = document.querySelector("#scene");

                scene.appendChild(bullet);


            }
        })
    },

}) 
