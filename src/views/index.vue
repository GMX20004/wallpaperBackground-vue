<template>
  <div class="background" :style="{width:width+'px',height:height+'px'}">
    <div v-if="isLogTo" class="system">
      <span class="menu">
        <div style="width: 100%;margin-top: 100%;">
          <div class="menu-button" @click="Click(0)" :class="options===0?'color-black':''">
            <svg t="1656988249675" class="menu-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2310" width="30" height="30">
              <path d="M900.745478 430.904767l-330.418307-308.008394c-16.679524-19.033077-40.82902-29.982212-66.411112-29.982212-25.172779 0-49.322274 10.846807-65.2855 28.8566L120.491656 430.802438c-15.860897 16.270211-20.465674 39.805736-11.665434 60.783052 8.80024 20.977316 29.163585 34.075347 51.880484 34.075347l28.651944 0 0 314.148096c0 48.708304 38.987109 88.309383 87.695413 88.309383l136.608374 0c17.702808 0 33.461377-14.325972 33.461377-32.02878L447.123813 687.032677c0-8.902568 5.832717-16.781853 14.735285-16.781853l96.393325 0c8.902568 0 15.656241 7.981613 15.656241 16.781853l0 208.954532c0 17.805136 14.837614 32.02878 32.540422 32.02878l136.608374 0c48.708304 0 88.616369-39.498751 88.616369-88.309383l0-314.148096 28.549615 0c22.61457 0 42.977915-13.098031 51.778155-33.973019C921.006495 470.812831 916.504047 447.174978 900.745478 430.904767L900.745478 430.904767 900.745478 430.904767M900.745478 430.904767 900.745478 430.904767z" p-id="2311" :fill="options===0?'#ffffff':'#2c2c2c'"></path>
            </svg>
          </div>
          <div class="menu-button" @click="Click(1)" :class="options===1?'color-black':''">
            <svg t="1657000759654" class="menu-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4688" width="30" height="30">
              <path d="M508.8 141.21c119.85 0 217.36 97.51 217.36 217.36S628.65 575.93 508.8 575.93s-217.36-97.51-217.36-217.36 97.51-217.36 217.36-217.36m0-76.71c-162.41 0-294.07 131.66-294.07 294.07S346.39 652.64 508.8 652.64s294.07-131.66 294.07-294.07S671.21 64.5 508.8 64.5z" p-id="4689" :fill="options===1?'#ffffff':'#2c2c2c'"></path>
              <path d="M106.1 959.5c-2.21 0-4.46-0.19-6.71-0.59-20.86-3.68-34.79-23.58-31.11-44.44 38.81-219.89 255.93-338.54 440.52-338.54 21.18 0 38.36 17.17 38.36 38.36s-17.17 38.36-38.36 38.36c-122.34 0-329.6 74.7-364.97 275.17-3.28 18.59-19.47 31.68-37.73 31.68z" p-id="4690" :fill="options===1?'#ffffff':'#2c2c2c'"></path>
              <path d="M917.9 959.5c-18.27 0-34.45-13.09-37.73-31.7-35.38-200.46-242.64-275.16-364.97-275.16-21.18 0-38.36-17.17-38.36-38.36s17.17-38.36 38.36-38.36c184.59 0 401.72 118.65 440.52 338.54 3.68 20.86-10.25 40.76-31.11 44.44-2.25 0.41-4.5 0.6-6.71 0.6z" p-id="4691" :fill="options===1?'#ffffff':'#2c2c2c'"></path>
            </svg>
          </div>
          <div class="menu-button" @click="Click(2)" :class="options===2?'color-black':''">
            <svg t="1657000978789" class="menu-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5732" width="30" height="30">
              <path d="M512.824785 2.489704c-283.043425 0-512.477884 203.929576-512.477884 455.538057 0 147.789974 72.163553 279.138488 194.830337 362.373191 0.726547 0.485047-12.627598 201.108321-12.627598 201.108321l206.019167-120.274294c37.784558 7.897877 80.438007 12.332886 120.917954 12.332886 283.043425 0 514.166339-203.929576 514.166339-455.540104C1023.653099 206.420303 795.868209 2.489704 512.824785 2.489704zM263.463484 523.996219c-35.317367 0-63.956637-28.636201-63.956637-63.956637 0-35.322483 28.639271-63.956637 63.956637-63.956637 35.32453 0 63.956637 28.634154 63.956637 63.956637C327.420121 495.361041 298.788014 523.996219 263.463484 523.996219zM512 523.996219c-35.32453 0-63.956637-28.636201-63.956637-63.956637 0-35.322483 28.632107-63.956637 63.956637-63.956637 35.317367 0 63.956637 28.634154 63.956637 63.956637C575.956637 495.361041 547.316344 523.996219 512 523.996219zM760.52833 523.996219c-35.32453 0-63.956637-28.636201-63.956637-63.956637 0-35.322483 28.632107-63.956637 63.956637-63.956637s63.956637 28.634154 63.956637 63.956637C824.484967 495.361041 795.85286 523.996219 760.52833 523.996219z" p-id="5733" :fill="options===2?'#ffffff':'#2c2c2c'"></path>
            </svg>
          </div>
          <div class="menu-button" @click="Click(3)" :class="options===3?'color-black':''">
            <svg t="1657001046679" class="menu-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6039" width="30" height="30">
              <path d="M810 203.8H213.7c-33 0-59.8 26.8-59.8 59.8v496.1c0 33 26.8 59.8 59.8 59.8h596.2c33 0 59.8-26.8 59.8-59.8V263.5c0.1-32.9-26.7-59.7-59.7-59.7z m-596.3 48.5H810c6.1 0 11.2 5.1 11.2 11.2v428.2L638 429c-7.4-10.7-20.2-17.2-33.7-17.2-13.6 0-26.2 6.5-33.6 17.2L440.8 616.4l-71.7-77c-8.3-9-20.6-13.7-33.1-12.8-12.6 0.8-24 7.2-30.9 17.1L202.5 691.9V263.5c0-6.1 5.1-11.2 11.2-11.2z m0 0" p-id="6040" :fill="options===3?'#ffffff':'#2c2c2c'"></path>
              <path d="M316.2 411.8c30.2 0 54.8-24.6 54.8-54.8 0-30.2-24.6-54.8-54.8-54.8-30.2 0-54.8 24.6-54.8 54.8 0 30.3 24.6 54.8 54.8 54.8z m0-71.6c9.3 0 16.9 7.6 16.9 16.9 0 9.3-7.5 16.9-16.9 16.9-9.3 0-16.9-7.6-16.9-16.9 0.2-9.3 7.7-16.9 16.9-16.9z m0 0" p-id="6041" :fill="options===3?'#ffffff':'#2c2c2c'"></path>
            </svg>
          </div>
          <div class="menu-button" @click="Click(4)" :class="options===4?'color-black':''">
            <svg t="1657001090107" class="menu-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7043" width="30" height="30">
              <path d="M510.37806 337.803609c-98.010221 0-177.748287 78.842673-177.748287 175.75284 0 96.91426 79.738066 175.763073 177.748287 175.763073 9.537214 0 19.620873-0.978281 31.797194-3.088338 18.196431-3.281743 30.290887-20.538779 26.963095-38.471197-2.924609-15.732309-16.693194-27.152407-32.747845-27.152407-2.071172 0-4.15974 0.196475-6.123464 0.563842-7.937786 1.402953-14.233166 2.056845-19.807115 2.056845-61.159942 0-110.915136-49.201585-110.915136-109.671819 0-60.467163 49.679469-109.661585 110.747313-109.661585 61.116963 0 110.832248 49.194422 110.832248 109.661585 0 5.892197-0.656963 12.0832-2.088568 19.531845-3.327792 17.928325 8.769734 35.189454 26.959002 38.464033 2.006703 0.360204 4.045129 0.546446 6.070252 0.546446 16.204054 0 30.019711-11.43033 32.832779-27.116591 2.13871-11.45182 3.13848-21.435195 3.13848-31.41857 0.042979-46.873564-18.435884-90.990341-52.033074-124.223233C602.407056 356.106464 557.790906 337.803609 510.37806 337.803609z" p-id="7044" :fill="options===4?'#ffffff':'#2c2c2c'"></path>
              <path d="M938.476161 432.79917c-2.185782-11.426237-11.037381-20.499893-22.563902-23.12058-41.909505-9.508561-76.781734-34.929534-98.185206-71.550593-21.334911-36.560684-26.191522-79.099523-13.68979-119.709429 3.52836-11.123338 0.007163-23.235191-8.951883-30.840402-41.860387-35.721573-89.536222-62.938448-141.695163-80.885192-3.152806-1.088798-6.437619-1.639337-9.776667-1.639337-8.256034 0-16.182564 3.431146-21.724791 9.376555-29.236881 31.04404-68.840878 48.140417-111.5107 48.140417-42.673915 0-82.305541-17.125029-111.607914-48.230468-7.877411-8.333806-20.510126-11.512195-31.580253-7.726985-52.483328 18.171871-100.131535 45.416376-141.640927 80.988546-8.815783 7.591909-12.322653 19.620873-8.934486 30.67258 12.586666 40.645722 7.759731 83.180468-13.597693 119.78106-21.306258 36.5965-56.149834 62.006216-98.17395 71.561849-11.540847 2.709715-20.396539 11.812023-22.559808 23.166629-5.228071 27.169803-7.877411 54.346769-7.877411 80.770582 0 26.426883 2.64934 53.603849 7.873318 80.763418 2.174526 11.411911 11.023054 20.488637 22.552645 23.12058 41.913599 9.512654 76.785827 34.922371 98.19237 71.547523 21.349237 36.59343 26.177196 79.128175 13.583366 119.795387-3.363607 10.969842 0.121773 23.013133 8.973372 30.758538 41.84913 35.707246 89.494267 62.920028 141.662417 80.902588 11.466146 3.885494 23.738657 0.549515 31.454386-7.680936 29.29828-31.091112 68.925812-48.216141 111.593588-48.216141s82.302471 17.125029 111.560842 48.183396c5.556553 5.955642 13.494339 9.380648 21.782096 9.380648 3.27765 0 6.537903-0.520863 9.829879-1.599428 52.126194-17.968234 99.774401-45.184085 141.652184-80.912821 8.791224-7.577582 12.308327-19.628036 8.94165-30.758538-12.597923-40.678468-7.745405-83.20605 13.672394-119.773897 21.324678-36.625152 56.192813-62.030775 98.19237-71.547523 11.390421-2.592035 20.23588-11.633968 22.549575-23.106254 5.223978-27.184129 7.870248-54.358025 7.870248-80.770582C946.342316 487.171522 943.697069 459.965903 938.476161 432.79917zM728.572524 789.878798c-26.02677 20.157085-54.736649 36.553521-85.487 48.818869-36.682457-32.144094-83.60207-49.779753-132.792399-49.779753-48.926316 0-95.838765 17.635659-132.767839 49.786916-30.744211-12.262278-59.45716-28.655643-85.491093-48.812729 9.894348-47.441499 1.889023-96.449679-22.763446-138.627291-24.448832-41.966811-63.427588-73.339332-110.186542-88.840374-2.381234-16.343223-3.584642-32.758078-3.584642-48.869011 0-16.043395 1.203408-32.451086 3.584642-48.851615 46.612621-15.389502 85.584214-46.758953 110.186542-88.850607 24.523533-42.024116 32.525788-91.033319 22.74912-138.620128 26.0237-20.149922 54.735625-36.543288 85.494163-48.815799 36.821627 32.201399 83.73817 49.861618 132.778072 49.861618 49.194422 0 96.109941-17.635659 132.792399-49.779753 30.751375 12.269441 59.45716 28.662807 85.48086 48.812729-9.809413 47.63388-1.835811 96.634898 22.667256 138.620128 24.445762 41.966811 63.416332 73.343425 110.182448 88.850607 2.381234 16.386202 3.584642 32.801057 3.584642 48.940642 0.143263 15.443737-1.031493 31.797194-3.499707 48.701189-46.763047 15.504112-85.73771 46.873564-110.186542 88.836281C726.84416 693.189665 718.845998 742.190683 728.572524 789.878798z" p-id="7045" :fill="options===4?'#ffffff':'#2c2c2c'"></path>
            </svg>
          </div>
        </div>
      </span>
      <span class="window">
        <div class="accordingWindow">
          <el-config-provider :locale="language===1?en:zhCn">
            <keep-alive>
              <router-view />
            </keep-alive>
          </el-config-provider>
        </div>
      </span>
    </div>
    <div v-else class="system" style="background-image: url('http://101.43.88.137/image/system/LoginInterface.jpg')">
      <span class="logTo-background">
      </span>
      <span class="logTo-interface">
        <div class="logTo-title"><b>{{language===1?'LogIn':'登录'}}</b></div>
        <el-form
          style="width: 96%;margin: 50px 0 0 2%;"
          ref="ruleFormRef"
          :model="logIn"
          :rules="rules"
          label-width="80px">
          <el-form-item :label="language===1?'Account:':'账号:'" prop="account">
            <el-input v-model="logIn.account" :placeholder="language===1?'Please input Account':'请输入账号'" clearable></el-input>
          </el-form-item>
          <el-form-item :label="language===1?'Password:':'密码:'" prop="password">
            <el-input v-model="logIn.password" type="password" :placeholder="language===1?'Please input Password':'请输入密码'" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <span style="width: 100%;display: flex">
              <el-image fit="scale-down" :src="logIn.yzmImg" style="cursor: pointer;height: 100%" @click="yzmQuery"></el-image>
              <el-input style="margin-left: 20px;width: 100px;" maxlength="4" v-model="logIn.yzmText"  @keydown.enter="submit(ruleFormRef)" :placeholder="language===1?'Please input':'请输入'" clearable></el-input>
            </span>
          </el-form-item>
        </el-form>
        <el-button  style="width: 90%;margin: 20px 0 0 5%" type="primary" @click="submit(ruleFormRef)">{{language===1?'LogIn':'登录'}}</el-button>
        <div style="width: 96%;margin:10px 0 0 2%;text-align: right"><span style="color: #2c95d4;cursor: pointer" @click="visitorsLogin">{{language===1?'Visitors to login':'游客登录'}}</span></div>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, onMounted, provide, reactive, readonly, ref } from "vue";
import { useRouter } from "vue-router";
import zhCn from "element-plus/lib/locale/lang/zh-cn"
import en from 'element-plus/lib/locale/lang/en';
import { ElMessage, FormInstance, FormRules } from "element-plus";
import Qs from "qs";
/**
 * 接口区
 */
interface logInInterface{
  account: string,
  password: string,
  verificationCode: string,
  yzmImg: any,
  yzm: string,
  yzmText: string
}
/**
 * 变量区
 */
const proxy = inject("proxy");
const { $http } = proxy as any;
const { $cookies } = proxy as any;
const router = useRouter();
let options = ref(0);
let width = ref<number>(window.innerWidth<1536?1536:window.innerWidth);
let height = ref<number>(window.innerHeight<754?754:window.innerHeight);
let language = ref(1);
const userInformation = ref<any>({});
const uuid = ref<string>('');
const isLogTo = ref<boolean>(false);
const ruleFormRef = ref<FormInstance>();
const logIn = reactive<logInInterface>({
  account: '',
  password: '',
  verificationCode: '',
  yzmImg: null,
  yzm: '',
  yzmText: ''
});
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(language.value===1?'Please input':'请输入'))
  } else {
      if (!ruleFormRef.value) return;
      callback()
  }
}
const rules  = reactive<FormRules>({
  account:{  validator: validatePass, trigger: 'blur' },
  password:{  validator: validatePass, trigger: 'blur'}
});
/**
 * 方法区
 */
const Click = (val:number) => {
  options.value = val;
  switch (val){
    case 0:
      router.push({
        'path': '/homePage'
      });
      break;
    case 1:
      router.push({
        'path': '/user'
      });
      break;
    case 2:
      router.push({
        'path': '/message'
      });
      break;
    case 3:
      router.push({
        'path': '/wallpaper'
      });
      break;
    case 4:
      router.push({
        'path': '/setUp'
      });
      break;
  }
}
const yzmQuery = () => {
  $http.get('/L/yzm').then((res:any)=>{
    logIn.yzmImg = 'data:image/png;base64,'+res.data['img'];
    logIn.yzm = res.data['text'];
    logIn.yzmText = '';
  })
}
const submit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      if (logIn.yzmText.toLowerCase() !== logIn.yzm.toLowerCase()){
        ElMessage({
          message: language.value===1?'Verification code error, please enter again':'验证码错误,请重新输入',
          type: 'warning',
        });
        yzmQuery();
      }else{
        $http.post('/admin/e4c984df9f364376992066fd393d89fe?'+Qs.stringify({
          account: logIn.account,
          password: logIn.password
        })).then((res:any)=>{
          if (res.data['exists']){
            ElMessage({
              message: language.value===1?'Login successful':'登录成功',
              type: 'success',
            });
            uuid.value = res.data['uuid'];
            $http.post('/User/userUUID?'+Qs.stringify({
              uuid: uuid.value
            })).then((data:any)=>{
              userInformation.value = data.data[0];
              language.value = data.data[0]['language'];
              $cookies.set('uuid',res.data['uuid'],{ expires: -1 });
              isLogTo.value = true;
              if (window.location.pathname == '/')
                router.push({ 'path': '/homePage' });
              else
                router.push({ 'path': window.location.pathname });
            });
          }else{
            ElMessage.error(language.value===1?'Account or password is incorrect':'帐号或密码错误')
          }
        });
      }
    } else {
      return false
    }
  });
}
const visitorsLogin = () =>{
  $http.post('/User/userUUID?'+Qs.stringify({
    uuid: '000000'
  })).then((data:any)=>{
    userInformation.value = data.data[0];
    language.value = data.data[0]['language'];
    $cookies.set('uuid','000000',{ expires: -1 });
    isLogTo.value = true;
    if (window.location.pathname == '/')
      router.push({ 'path': '/homePage' });
    else
      router.push({ 'path': window.location.pathname });
  });
}
onMounted(()=>{
  if ($cookies.get('uuid')!==null){
    $http.post('/User/userUUID?'+Qs.stringify({
      uuid: $cookies.get('uuid')
    })).then((data:any)=>{
      userInformation.value = data.data[0];
      language.value = data.data[0]['language'];
    });
    isLogTo.value = true;
    router.push({
      'path': '/homePage'
    });
  }
  yzmQuery();
})
/**
 * 全局变量
 */
provide('language',readonly(language));
provide('modifyLanguage', (val:number) => {
  language.value = val;
});
provide('modifyIsLogTo', (val:boolean) => {
  isLogTo.value = val;
});
provide('userInformation',userInformation);
/**
 * 监视浏览器分辨率变化
 */
window.onresize = function(){
  if (window.innerWidth<1536){
    width.value = 1536;
  }else{
    width.value = window.innerWidth;
  }
  if (window.innerHeight<754){
    height.value = 754;
  }else{
    height.value = window.innerHeight;
  }
  router.go(0);
  // reload();
}
</script>

<style scoped lang="scss">
.background{
  background-color: #dddfeb;
  overflow: hidden;
  display: inline-block;
  position: absolute;
  .system{
    margin: 5% 0 0 10%;
    width: 80%;
    height: 80%;
    background-color: #eff2f7;
    border-radius: 50px;
    display: flex;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    .menu{
      width: 150px;
      height: 100%;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
    .window{
      width: calc(100% - 200px);
      margin-top: 3%;
      height: 90%;
      background-color: white;
      border-radius: 50px;
      .accordingWindow{
        width: 95%;
        height: 90%;
        margin: 3.5% 0 0 2.5%;
      }
    }
    .menu-button{
      width: 50px;
      height: 50px;
      border-radius: 100%;
      margin-left: 50px;
      margin-top: 10px;
      cursor:pointer;
      text-align: center;
      .menu-icon{
        margin-top: 10px;
      }
    }
    .logTo-background{
      width: calc(100% - 350px);
      font-size: 100px;
      color: white;
      height: 100%;
    }
    .logTo-interface{
      width: 300px;
      height: 400px;
      margin-top: 10%;
      border-radius: 20px;
      background-color: white;
      .logTo-title{
        width: 100%;
        margin-top: 10px;
        font-size: 40px;
        text-align: center;
        color: #2c95d4;
      }
    }
  }
}
.color-black{
  background-color: black;
}
</style>
