import { Card, Col, Row, Button, Text, Grid } from '@nextui-org/react';
import { useRouter } from "next/router";

interface PropsCard{
    name:string,
    id:number,
    imgPoke:string,
}

export const Card4= ({id,name,imgPoke}:PropsCard) => {
  const router=useRouter();

  const onClick=()=>{
    router.push(`/pokemon/${id}`)
  }
  return(
<Grid xs={6} sm={3} md={2} >

  <Card css={{ w: "100%", h: "300px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffff">
          #{id}
        </Text>
        
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={imgPoke}
        width="100%"
        height="100%"
        objectFit="contain"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff3b",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#f8f1f1" text-shadow='1px 1px  black' h4>
          {name}
          </Text>
          <Text color="#000" size={12}>
            Get notified.
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="success" onClick={onClick}>
              <Text
                css={{ color: "withe" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Ver mas 
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
</Grid>
  )

};