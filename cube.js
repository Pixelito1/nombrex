function ObjectCreate(xpos, ypos, zpos,color)
{
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const colorDefined = new THREE.Color("rgb("+color+",200,0)");
    const material = new THREE.MeshBasicMaterial( { color: colorDefined } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    cube.position.x = xpos;
    cube.position.y = ypos;
    cube.position.z = zpos;

    var a = [0,-0.009,0];
    var v = [0,0,0];

    this.update = function()
    {
        v[1]+=a[1];
        cube.position.y += v[1];
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
    }
}

//host12345+A