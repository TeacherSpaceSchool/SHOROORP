import React, { useState } from 'react';
import '../Where.css';

const ArchiCoin  = React.memo(
    (props)=>{
        let [selectSector, setSelectSector] = useState('');
        let {sector, selectDate, holderPart, event} = props
        return (
            <svg className='dont-select-text' width={720} height={500} xmlns='http://www.w3.org/2000/svg'>
                    {/* Created with Method Draw - http://github.com/duopixel/Method-Draw/ */}
                    <g>
                        <rect x={-1} y={-1} width={722} height={502} id='canvas_background' fill='#fff' />
                        <g id='canvasGrid' display='none'>
                            <rect id='svg_2' width='100%' height='100%' x={0} y={0} strokeWidth={0} fill='url(#gridpattern)' />
                        </g>
                    </g>
                    <g>
                        <rect onClick={()=>{setSelectSector('сектор 7'); holderPart('сектор 7', event)}} className='pointer-text' fill={selectSector==='сектор 7'?'red':'#191e28'} strokeWidth='1.5' x='470.393095' y='26.740726' width={72} height={79} id='svg_1' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 6'); holderPart('сектор 6', event)}} className='pointer-text' fill={selectSector==='сектор 6'?'red':'#191e28'} strokeWidth='1.5' x='393.393095' y='26.740726' width={72} height={79} id='svg_6' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 5'); holderPart('сектор 5', event)}} className='pointer-text' fill={selectSector==='сектор 5'?'red':'#191e28'} strokeWidth='1.5' x='316.393095' y='25.740726' width={72} height={79} id='svg_7' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 4'); holderPart('сектор 4', event)}} className='pointer-text' fill={selectSector==='сектор 4'?'red':'#191e28'} strokeWidth='1.5' x='239.393095' y='25.740726' width={72} height={79} id='svg_8' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 3'); holderPart('сектор 3', event)}} className='pointer-text' fill={selectSector==='сектор 3'?'red':'#191e28'} strokeWidth='1.5' x='162.393095' y='25.740726' width={72} height={79} id='svg_9' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 2'); holderPart('сектор 2', event)}} className='pointer-text' fill={selectSector==='сектор 2'?'red':'#191e28'} strokeWidth='1.5' x='85.393095' y='25.740726' width={72} height={79} id='svg_10' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 1'); holderPart('сектор 1', event)}} className='pointer-text' fill={selectSector==='сектор 1'?'red':'#191e28'} strokeWidth='1.5' x='8.393095' y='25.740726' width={72} height={79} id='svg_11' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 23'); holderPart('сектор 23', event)}} className='pointer-text' fill={selectSector==='сектор 23'?'red':'#191e28'} strokeWidth='1.5' x='472.393095' y='313.740726' width={72} height={79} id='svg_18' stroke='#4526cc' />
                        <rect onClick={()=>{setSelectSector('сектор 24'); holderPart('сектор 24', event)}} className='pointer-text' fill={selectSector==='сектор 24'?'red':'#191e28'} strokeWidth='1.5' x='395.393095' y='313.740726' width={72} height={79} id='svg_19' stroke='#4526cc' />
                        <rect onClick={()=>{setSelectSector('сектор 25'); holderPart('сектор 25', event)}} className='pointer-text' fill={selectSector==='сектор 25'?'red':'#191e28'} strokeWidth='1.5' x='318.393095' y='312.740726' width={72} height={79} id='svg_20' stroke='#4526cc' />
                        <rect onClick={()=>{setSelectSector('VIP'); holderPart('VIP', event)}} className='pointer-text' fill={selectSector==='VIP'?'red':'#191e28'} strokeWidth='1.5' x='241.393095' y='312.740726' width={72} height={79} id='svg_21' stroke='#8d6e63' />
                        <rect onClick={()=>{setSelectSector('сектор 26'); holderPart('сектор 26', event)}} className='pointer-text' fill={selectSector==='сектор 26'?'red':'#191e28'} strokeWidth='1.5' x='164.393095' y='312.740726' width={72} height={79} id='svg_22' stroke='#4526cc' />
                        <rect onClick={()=>{setSelectSector('сектор 27'); holderPart('сектор 27', event)}} className='pointer-text' fill={selectSector==='сектор 27'?'red':'#191e28'} strokeWidth='1.5' x='87.393095' y='312.740726' width={72} height={79} id='svg_23' stroke='#4526cc' />
                        <rect onClick={()=>{setSelectSector('сектор 28'); holderPart('сектор 28', event)}} className='pointer-text' fill={selectSector==='сектор 28'?'red':'#191e28'} strokeWidth='1.5' x='10.393095' y='312.740726' width={72} height={79} id='svg_24' stroke='#4526cc' />
                        <rect onClick={()=>{setSelectSector('сектор 16'); holderPart('сектор 16', event)}} className='pointer-text' fill={selectSector==='сектор 16'?'red':'#191e28'} strokeWidth='1.5' x='472.393095' y='409.740726' width={72} height={79} id='svg_25' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 17'); holderPart('сектор 17', event)}} className='pointer-text' fill={selectSector==='сектор 17'?'red':'#191e28'} strokeWidth='1.5' x='395.393095' y='409.740726' width={72} height={79} id='svg_26' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 18'); holderPart('сектор 18', event)}} className='pointer-text' fill={selectSector==='сектор 18'?'red':'#191e28'} strokeWidth='1.5' x='318.393095' y='408.740726' width={72} height={79} id='svg_27' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 19'); holderPart('сектор 19', event)}} className='pointer-text' fill={selectSector==='сектор 19'?'red':'#191e28'} strokeWidth='1.5' x='241.393095' y='408.740726' width={72} height={79} id='svg_28' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 20'); holderPart('сектор 20', event)}} className='pointer-text' fill={selectSector==='сектор 20'?'red':'#191e28'} strokeWidth='1.5' x='164.393095' y='408.740726' width={72} height={79} id='svg_29' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 21'); holderPart('сектор 21', event)}} className='pointer-text' fill={selectSector==='сектор 21'?'red':'#191e28'} strokeWidth='1.5' x='87.393095' y='408.740726' width={72} height={79} id='svg_30' stroke='#26cccc' />
                        <rect onClick={()=>{setSelectSector('сектор 22'); holderPart('сектор 22', event)}} className='pointer-text' fill={selectSector==='сектор 22'?'red':'#191e28'} strokeWidth='1.5' x='10.393095' y='408.740726' width={72} height={79} id='svg_31' stroke='#26cccc' />
                        <rect fill='#59e000' strokeWidth='1.5' x='9.393083' y='121.178218' width='534.000005' height='176.000015' id='svg_32' stroke='#59e000' />
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='40.393095' y='76.178226' id='svg_35' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>1</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='116.393095' y='76.178226' id='svg_43' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>2</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='193.393095' y='76.178226' id='svg_44' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>3</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='270.393095' y='76.178226' id='svg_45' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>4</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='347.393095' y='76.178226' id='svg_46' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>5</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='424.393095' y='77.178226' id='svg_47' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>6</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='501.393095' y='78.178226' id='svg_48' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>7</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='564.393095' y='81.178226' id='svg_49' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>8</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='615.393095' y='104.178226' id='svg_51' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>9</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='642.393095' y='141.178226' id='svg_53' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>10</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='655.393095' y='195.178226' id='svg_54' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>11</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='654.393095' y='243.178226' id='svg_55' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>12</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='497.393095' y='361.178226' id='svg_59' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>23</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='421.393095' y='360.178226' id='svg_60' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>24</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='343.393095' y='359.178226' id='svg_61' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>25</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='189.393095' y='359.178226' id='svg_62' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>26</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='112.393095' y='359.178226' id='svg_63' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>27</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} x='35.393095' y='359.178226' id='svg_64' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>28</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='498.393095' y='457.178226' id='svg_67' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>16</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='421.393095' y='456.178226' id='svg_68' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>17</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='344.393095' y='455.178226' id='svg_69' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>18</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='267.393095' y='455.178226' id='svg_70' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>19</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='192.393095' y='455.178226' id='svg_71' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>20</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='115.393095' y='455.178226' id='svg_72' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>21</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='38.393095' y='455.178226' id='svg_73' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>22</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} strokeOpacity='null' fillOpacity='null' x='265.393095' y='344.178226' id='svg_76' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>VIP</text>
                        <text fill='#ffffff' stroke='#ffffff' strokeWidth={0} strokeOpacity='null' fillOpacity='null' x='246.393095' y='367.178226' id='svg_77' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>Трибуна</text>
                        <text fill='#ffffff' stroke='#59e000' strokeWidth={0} strokeOpacity='null' x='252.393095' y='218.178226' id='svg_80' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>ПОЛЕ</text>
                        <path id='svg_86' d='m708.393095,122.178226' opacity='0.5' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#26cccc' fill='#26cccc' />
                        <path id='svg_88' d='m547.332125,105.995188' opacity='0.5' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' fill='#191e28' />
                        <path id='svg_91' d='m566.665438,80.661881' opacity='0.5' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' fill='#191e28' />
                        <path transform='rotate(-0.682650625705719 577.6701049804686,71.33074951172125) ' id='svg_89' d='m546.665459,25.328606l-0.666654,83.999916c0.666654,0.666662 29.999957,7.333321 29.999957,7.999987c0,0.666666 33.999964,-77.333253 33.333311,-77.999916' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' onClick={()=>{setSelectSector('сектор 8'); holderPart('сектор 8', event)}} className='pointer-text' fill={selectSector==='сектор 8'?'red':'#191e28'} />
                        <path id='svg_92' d='m579.998758,53.328576' opacity='0.5' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' fill='#191e28' />
                        <path id='svg_93' d='m580.665423,117.995176l31.333314,-75.999918l53.333279,45.333287l-64.6666,50.666615' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' onClick={()=>{setSelectSector('сектор 9'); holderPart('сектор 9', event)}} className='pointer-text' fill={selectSector==='сектор 9'?'red':'#191e28'} />
                        <path id='svg_94' d='m603.99873,140.88404c0,0 61.999935,-49.999948 61.999935,-49.999948c0,0 30.666635,61.999935 30.666635,61.333269c0,-0.666666 -77.333253,13.999985 -77.333253,13.999985' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' onClick={()=>{setSelectSector('сектор 10'); holderPart('сектор 10', event)}} className='pointer-text' fill={selectSector==='сектор 10'?'red':'#191e28'} />
                        <path id='svg_95' d='m619.998715,170.884009c0,0 78.666584,-15.333317 77.999934,-15.555534c0.66665,0.222216 7.33331,58.888822 6.66666,58.666607c0.66665,0.222215 -81.99993,-13.111104 -82.666582,-13.33332' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' onClick={()=>{setSelectSector('сектор 11'); holderPart('сектор 11', event)}} className='pointer-text' fill={selectSector==='сектор 11'?'red':'#191e28'} />
                        <path id='svg_96' d='m623.998712,205.772865l80.666598,11.555546c0.66665,0.444441 -8.000007,52.444387 -8.000007,52.444387c0,0 -75.333255,-31.999967 -75.999907,-32.444407' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' onClick={()=>{setSelectSector('сектор 12'); holderPart('сектор 12', event)}} className='pointer-text' fill={selectSector==='сектор 12'?'red':'#191e28'} />
                        <path id='svg_97' d='m621.332049,241.745384l75.999936,32.518489c0.66665,0.148144 -28.666652,56.814751 -28.666652,57.481417c0,0.666666 -55.999941,-61.999935 -56.666594,-62.148079' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' onClick={()=>{setSelectSector('сектор 13'); holderPart('сектор 13', event)}} className='pointer-text' fill={selectSector==='сектор 13'?'red':'#191e28'} />
                        <path id='svg_98' d='m610.665391,272.143164c0,0 54.66661,62.666601 53.999958,62.518459c0.666651,0.148143 -50.666629,44.148097 -51.333281,43.999955c0.666652,0.148142 -23.999989,-81.185107 -23.999989,-80.518441' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' onClick={()=>{setSelectSector('сектор 14'); holderPart('сектор 14', event)}} className='pointer-text' fill={selectSector==='сектор 14'?'red':'#191e28'} />
                        <path id='svg_99' d='m585.998751,300.143137l24.666655,77.851777l-63.333268,15.333318l0.666666,-79.999918' fillOpacity='null' strokeOpacity='null' strokeWidth='1.5' stroke='#191e28' onClick={()=>{setSelectSector('сектор 15'); holderPart('сектор 15', event)}} className='pointer-text' fill={selectSector==='сектор 15'?'red':'#191e28'} />
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='564.059698' y='76.844895' id='svg_102' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>8</text>
                        <text style={{cursor: 'move'}} fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='614.059645' y='99.511538' id='svg_103' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>9</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='640.726282' y='143.511492' id='svg_104' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>10</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='652.059604' y='192.844774' id='svg_105' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>11</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='651.392938' y='236.17806' id='svg_106' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>12</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='641.392948' y='286.844673' id='svg_107' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>13</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='610.726313' y='328.844629' id='svg_108' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>14</text>
                        <text fill='#ffffff' stroke='#26cccc' strokeWidth={0} x='564.72636' y='354.844602' id='svg_109' fontSize={16} fontFamily='Helvetica, Arial, sans-serif' textAnchor='start' xmlSpace='preserve'>15</text>
                    </g>
                </svg>
        )
    }
)

export default ArchiCoin;
