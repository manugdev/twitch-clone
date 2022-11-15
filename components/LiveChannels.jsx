import React from 'react'
import Channels from './Channels'

const LiveChannels = () => {
  return (
    <div id='live' className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-2'>
          <span className='text-[#9147FF]'>Live Channels</span> we think you&apos;ll like
        </h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'>
        <Channels
          img='https://i.ytimg.com/an_webp/TRCxgynnN2Y/mqdefault_6s.webp?du=3000&sqp=CKT3ypsG&rs=AOn4CLCy_z_-7eVs84sYkjiRPS_8SImkJg'
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/842aaa2a-4801-4096-9792-92fb3a7f5296-profile_image-70x70.png'
          title='Seguimos con CSS 🎨 | !codely !redes'
          user='vamoacodear'
          game='Software and Game Development'
        />
        <Channels
          img='https://i.ytimg.com/an_webp/wXfk1ClL3ys/mqdefault_6s.webp?du=3000&sqp=CPOAy5sG&rs=AOn4CLDSqiBhZdwYy0VpRr12zs_mU2sNEA'
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/1975b18f-fa7d-443f-b191-fba08f92f3a2-profile_image-70x70.jpeg'
          title='Highlights: The Path To Champions'
          user='ESL_CSGO'
          game='Counter-Strike: Global Offensive'
        />
        <Channels
          img='https://i.ytimg.com/an_webp/n_pbCRYEs2w/mqdefault_6s.webp?du=3000&sqp=CLiby5sG&rs=AOn4CLBqYpcmmj7yRDBTb9PG24SLMyErWg'
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/22543fff-bfc5-4133-bfd3-75557a5e35ce-profile_image-70x70.png'
          title='RECUPERANDO INMORTAL II'
          user='blackelespanolito'
          game='Valorant'
        />
        <Channels
          img='https://i.ytimg.com/an_webp/gbdFkOQFFXo/mqdefault_6s.webp?du=3000&sqp=CM6ny5sG&rs=AOn4CLDoh4xrmrCR-h0ske2BqjvxfPpTHg'
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/84b900ce-29a1-4293-82e6-c50aa47783a9-profile_image-70x70.png'
          title='El Bootcamp que te forma gratis.'
          user='OpenBootcamp'
          game='Software and Game Development'
        />
        <Channels
          img='https://i.ytimg.com/an_webp/_sYhV-NHjQ4/mqdefault_6s.webp?du=3000&sqp=CKCTy5sG&rs=AOn4CLBalqi9qai6QHP02hd45NEyjwQ7CA'
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/bed3ea39-265b-4632-b866-598bb8c045dd-profile_image-50x50.png'
          title='Revisamor proyectos y portfolios en vivo | !discord'
          user='GoncyPozzo'
          game='Software and Game Development'
        />
        <Channels
          img='https://i.ytimg.com/an_webp/tA-_vAz9y78/mqdefault_6s.webp?du=3000&sqp=CPKOy5sG&rs=AOn4CLCDkJStsduiFnXQZQsl6msTp7548Q'
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/5a72c3d9-424a-40a6-bf23-73370cd85578-profile_image-70x70.png'
          title='JAVASCRIPT NOTICIAS - !youtube !patreon'
          user='midudev'
          game='Software and Game Development'
        />
        <Channels
          img='https://i.ytimg.com/an_webp/axKmmvU3-N4/mqdefault_6s.webp?du=3000&sqp=CKqpy5sG&rs=AOn4CLAh3IIMuaWc1CcoSDKVx087sfmEVg'
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/2c6fd96e-81ee-4397-a744-215b8c334287-profile_image-70x70.png'
          title='STREAM DESDE EGS / Partidas en frente del evento'
          user='Znorux'
          game='Counter-Strike: Global Offensive'
        />
        <Channels
          img='https://i.ytimg.com/an_webp/5ASVA9eeocg/mqdefault_6s.webp?du=3000&sqp=CMiKy5sG&rs=AOn4CLBOWbiCoOy-fS2qANLFU8SkefYaRw'
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/96ab6446-f2f4-4889-8382-57289eee628b-profile_image-70x70.png'
          title='SUBIENDO A DIAMANTE CON TALON ABUSER'
          user='NickDaBooM'
          game='League of Legends'
        />
        <Channels
          img='https://i.ytimg.com/an_webp/8-P-rbojkyg/mqdefault_6s.webp?du=3000&sqp=CPiay5sG&rs=AOn4CLBh6TZUaWS9_kkSwK4-SknzGeceuw'
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/f0044e07-f9f1-4530-8a69-faaea89aa7d8-profile_image-70x70.png'
          title='RANKEDS CON KILES | 30s DELAY 🐲🐲'
          user='Mixwell'
          game='VALORANT'
        />
        </div>
    </div>
  )
}

export default LiveChannels