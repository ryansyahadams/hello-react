//import React, { Component } frm 'react';
import React, { Component } from 'react';
import Image from './images';class List extends Component {
    render() {
        return (
            <div> 
                <ol>
                    <li> 
                        <Image srcGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg' /> </li>
                    <li>
                        <Image srcGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg'  /> </li>
                    <li>
                        <Image srcGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png'   /> </li> 
                    <li>
                        <Image srcGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png'  /> </li>   
                    <li>
                        <Image srcGambar='https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/81/2024/09/09/WhatsApp-Image-2024-09-09-at-74047-PM-224644451.jpeg'  /> </li>   
                </ol>
            </div>
        );
    }
} export default List;