import React, { useState, useEffect, useRef } from 'react'
// import img from './지원금.PNG'
import img from './지원금3.png'
import "./App.css"
import { Button, Modal } from 'semantic-ui-react'
const Canvas = (props) => {
  const [testSrc, setTestSrc] = useState('')
  const [open, setOpen] = React.useState(false)

  const canvasRef = useRef();
  const canvasRefFont = useRef();
  const canvasRefSubmit = useRef();
  const signRef = useRef();
  let canvas, canvasFont, canvasSubmit;
  let ctx, ctxFont, ctxSubmit;
  let image;

  function draw() {

    canvasFont = canvasRefFont.current;
    ctxFont = canvasFont.getContext('2d')
    ctxFont.clearRect(0, 0, 1039, 990);
    ctxFont.font = '30px serif';


    if (props.inputs.attendMonth >= 10) {  //교육지원금 달 수
      ctxFont.font = 'bold 38px serif';
      ctxFont.fillText(props.inputs.attendMonth, 543, 40) //맨위 젤큰놈
      ctxFont.font = 'bold 27px serif';
      ctxFont.fillText(props.inputs.attendMonth, 384, 330) //월 교육일수
      ctxFont.font = '28px serif';
      // ctxFont.fillText(props.inputs.attendMonth, 212, 642) // 월 출석일수
      // ctxFont.fillText(props.inputs.attendMonth, 512, 642) // 월 출석일수
    } else {
      ctxFont.font = 'bold 50px serif';
      ctxFont.fillText(props.inputs.attendMonth, 555, 42) // ~월 교육 지원금 서명 (맨위)
      ctxFont.font = '30px serif';
      ctxFont.fillText(props.inputs.attendMonth, 395, 333) //x 월 교육일수  
      // ctxFont.fillText(props.inputs.attendMonth, 225, 643)// 월 출석일수
      // ctxFont.fillText(props.inputs.attendMonth, 520, 643)// 월 출석일수
    }

    ctxFont.font = '30px serif';

    if (props.inputs.location.length === 2) { // 지역 (서울 , 대전 , 광주 , 부울경 등)
      ctxFont.fillText(props.inputs.location, 230, 183) // 지역(가운데 정렬)
    } else {
      ctxFont.fillText(props.inputs.location, 215, 183) //부울경 (살짝 왼쪽으로 치우치게)
    }



    if ((props.inputs.classNum + '').length === 1) { // 반  (1자리)
      ctxFont.fillText(props.inputs.classNum, 480, 183)
    } else if ((props.inputs.classNum + '').length === 2) {  // 반 (2자리)
      ctxFont.fillText(props.inputs.classNum, 470, 183)
    } else if ((props.inputs.classNum + '').length === 3) { // 반 (3자리)
      ctxFont.fillText(props.inputs.classNum, 440, 183)
    } else { // 반 (4자리)
      ctxFont.font = '26px serif';
      ctxFont.fillText(props.inputs.classNum, 430, 183)
      ctxFont.font = '30px serif';
    }

    //이름
    ctxFont.fillText(props.inputs.name, 840, 190)// 오른쪽 맨위 성명칸
    ctxFont.font = 'bold  40px serif';
    ctxFont.fillText(props.inputs.name, 205, 330) //교육지원금 칸에있는 이름
    ctxFont.font = '27px serif';

    if (props.inputs.totalDays < 10) {  //교육일수 xx일 볼드 된 곳
      ctxFont.fillText(props.inputs.totalDays, 600, 332)
    } else {
      ctxFont.fillText(props.inputs.totalDays, 590, 332)
    }
    ctxFont.fillText(props.inputs.attendDays, 900, 330) // 총 출석일



    ctxFont.font = '28px serif';
    ctxFont.fillText((props.inputs.year + '')[3], 680, 764) // 맨아래 날짜 연도
    ctxFont.font = '27px serif';
    //아래쪽 달수 2자리인지 검사
    if (props.inputs.month < 10) {
      ctxFont.fillText(props.inputs.month, 840, 764)
      ctxFont.fillText(props.inputs.attendMonth, 282, 640)
    } else {
      ctxFont.fillText(props.inputs.month, 825, 764)
      ctxFont.fillText(props.inputs.attendMonth, 270, 640)
    }





    if ((props.inputs.date + '').length === 1) { // 맨 아래 일
      ctxFont.fillText(props.inputs.date, 945, 764)
    } else {
      ctxFont.fillText(props.inputs.date, 935, 764)
    }

    //맨아래 인적사항
    ctxFont.fillText(props.inputs.name, 740, 890)
    ctxFont.font = 'italic 30px serif';
    ctxFont.drawImage(signRef.current, 848, 832.35)
  }

  function clearCanvas() {
    canvas = canvasRef.current;
    canvasFont = canvasRefFont.current;
    ctx = canvas.getContext('2d')
    ctxFont = canvasFont.getContext('2d')
    image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0)
    }
    image.src = img

  }


  function downloadCanvas() {

    canvas = canvasRef.current;
    canvasFont = canvasRefFont.current;
    canvasSubmit = canvasRefSubmit.current;
    ctx = canvas.getContext('2d')
    ctxFont = canvasFont.getContext('2d')
    ctxSubmit = canvasSubmit.getContext('2d')
    ctxSubmit.drawImage(canvas, 0, 0);
    ctxSubmit.drawImage(canvasFont, 0, 0);

    let link = document.createElement('a');
    const fileName = '' + props.inputs.location + '_' + props.inputs.classNum + '반_' + props.inputs.name
    link.download = fileName + ".JPG";
    link.href = canvasSubmit.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function toImage() {
    draw()
    canvas = canvasRef.current;
    canvasFont = canvasRefFont.current;
    canvasSubmit = canvasRefSubmit.current;
    ctx = canvas.getContext('2d')
    ctxFont = canvasFont.getContext('2d')
    ctxSubmit = canvasSubmit.getContext('2d')
    ctxSubmit.drawImage(canvas, 0, 0);
    ctxSubmit.drawImage(canvasFont, 0, 0);
    setTestSrc(canvasSubmit.toDataURL());
  }

  useEffect(() => {
    clearCanvas()
  })






  return (
    <>
      <div >
        <canvas
          style={{ display: 'none' }}
          id="canvasTop"
          ref={canvasRef}
          width={1039}
          height={990}
        />
        <canvas
          style={{ display: 'none' }}
          id="canvasBottom"
          ref={canvasRefFont}
          width={1039}
          height={990}
        />
        <canvas
          style={{ display: 'none' }}
          id="canvasSubmit"
          ref={canvasRefSubmit}
          width={1039}
          height={990}
        />
      </div>


      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button primary
          onClick={toImage}
          className="generate-button"
        >생성하기</Button>}
        style={{ width: '90%',maxWidth:'1070px' }}
      >
        <Modal.Header style={{ backgroundColor: '#f9fafb' }}> 미리 보기</Modal.Header>
        <Modal.Content image scrolling>


          <Modal.Description>
            <img src={testSrc} alt="이미지 미리보기" />

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={downloadCanvas} primary>
            {'다운로드  >'}
          </Button>
        </Modal.Actions>
      </Modal>
      <img src={props.inputs.sign} ref={signRef} width='10px' style={{ display: 'none' }} alt="sign" />
    </>
  )
}

export default Canvas