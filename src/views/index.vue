<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            
            <Col span="24">
                <h1>
                    <img src="../images/logo.png">
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                    <Row type="flex" justify="space-around" class="code-row-bg" style="padding-top: 20px;">
                        <Col span="8">
                            <Button type="primary" long @click="gotoBasic" size="large">goto Basic</Button>
                        </Col>
                        <Col span="8">
                            <Button type="warning" long @click="gotoForm" size="large">goto Form</Button>
                        </Col>
                    </Row>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            gotoBasic() {
                window.location.href = './basic/grid'
            },
            gotoForm() {
                window.location.href = './form/input'
            }
        }
    }
</script>
