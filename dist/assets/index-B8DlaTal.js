(async()=>{(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))I(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const Q of C.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&I(Q)}).observe(document,{childList:!0,subtree:!0});function A(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function I(g){if(g.ep)return;g.ep=!0;const C=A(g);fetch(g.href,C)}})();const LE="171",jC={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},VC={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},os=0,le=1,es=2,Ge=1,ts=2,_g=3,vg=0,$I=1,pg=2,oC=0,XC=1,ke=2,ye=3,Ue=4,as=5,MC=100,Ds=101,ss=102,hs=103,rs=104,Ss=200,ns=201,ws=202,cs=203,uE=204,HE=205,ls=206,Gs=207,ks=208,ys=209,Us=210,Ms=211,Ns=212,Ks=213,Js=214,mE=0,fE=1,TE=2,zC=3,xE=4,bE=5,OE=6,_E=7,Me=0,Fs=1,Rs=2,eC=0,ps=1,ds=2,qs=3,Ys=4,Ls=5,us=6,Hs=7,Ne="attached",ms="detached",Ke=300,$C=301,AB=302,vE=303,ZE=304,NQ=306,IB=1e3,tC=1001,KQ=1002,WI=1003,Je=1004,TB=1005,Ig=1006,JQ=1007,Zg=1008,Wg=1009,Fe=1010,Re=1011,xB=1012,WE=1013,NC=1014,ng=1015,bB=1016,PE=1017,jE=1018,gB=1020,pe=35902,de=1021,qe=1022,eg=1023,Ye=1024,Le=1025,CB=1026,BB=1027,VE=1028,XE=1029,ue=1030,zE=1031,$E=1033,FQ=33776,RQ=33777,pQ=33778,dQ=33779,Ai=35840,Ii=35841,gi=35842,Ci=35843,Bi=36196,Qi=37492,Ei=37496,ii=37808,oi=37809,ei=37810,ti=37811,ai=37812,Di=37813,si=37814,hi=37815,ri=37816,Si=37817,ni=37818,wi=37819,ci=37820,li=37821,qQ=36492,Gi=36494,ki=36495,He=36283,yi=36284,Ui=36285,Mi=36286,OB=2300,_B=2301,Ni=2302,me=2400,fe=2401,Te=2402,fs=2500,Ts=0,xe=1,Ki=2,xs=3200,bs=3201,be=0,Os=1,aC="",mI="srgb",PI="srgb-linear",YQ="linear",oI="srgb",QB=7680,Oe=519,_s=512,vs=513,Zs=514,_e=515,Ws=516,Ps=517,js=518,Vs=519,Ji=35044,ve="300 es",Pg=2e3,LQ=2001;class KC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const g=this._listeners[A];if(g!==void 0){const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const g=I.slice(0);for(let C=0,Q=g.length;C<Q;C++)g[C].call(this,A);A.target=null}}}const bI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ze=1234567;const vB=Math.PI/180,EB=180/Math.PI;function wg(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(bI[B&255]+bI[B>>8&255]+bI[B>>16&255]+bI[B>>24&255]+"-"+bI[A&255]+bI[A>>8&255]+"-"+bI[A>>16&15|64]+bI[A>>24&255]+"-"+bI[I&63|128]+bI[I>>8&255]+"-"+bI[I>>16&255]+bI[I>>24&255]+bI[g&255]+bI[g>>8&255]+bI[g>>16&255]+bI[g>>24&255]).toLowerCase()}function OA(B,A,I){return Math.max(A,Math.min(I,B))}function Fi(B,A){return(B%A+A)%A}function Xs(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function zs(B,A,I){return B!==A?(I-B)/(A-B):0}function ZB(B,A,I){return(1-I)*B+I*A}function $s(B,A,I,g){return ZB(B,A,1-Math.exp(-I*g))}function Ah(B,A=1){return A-Math.abs(Fi(B,A*2)-A)}function Ih(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function gh(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function Ch(B,A){return B+Math.floor(Math.random()*(A-B+1))}function Bh(B,A){return B+Math.random()*(A-B)}function Qh(B){return B*(.5-Math.random())}function Eh(B){B!==void 0&&(Ze=B);let A=Ze+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function ih(B){return B*vB}function oh(B){return B*EB}function eh(B){return(B&B-1)===0&&B!==0}function th(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function ah(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function Dh(B,A,I,g,C){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),e=Q((A+g)/2),t=E((A+g)/2),a=Q((A-g)/2),D=E((A-g)/2),h=Q((g-A)/2),n=E((g-A)/2);switch(C){case"XYX":B.set(i*t,o*a,o*D,i*e);break;case"YZY":B.set(o*D,i*t,o*a,i*e);break;case"ZXZ":B.set(o*a,o*D,i*t,i*e);break;case"XZX":B.set(i*t,o*n,o*h,i*e);break;case"YXY":B.set(o*h,i*t,o*n,i*e);break;case"ZYZ":B.set(o*n,o*h,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function cg(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return B/4294967295;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int32Array:return Math.max(B/2147483647,-1);case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function QI(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return Math.round(B*4294967295);case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int32Array:return Math.round(B*2147483647);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}const We={DEG2RAD:vB,RAD2DEG:EB,generateUUID:wg,clamp:OA,euclideanModulo:Fi,mapLinear:Xs,inverseLerp:zs,lerp:ZB,damp:$s,pingpong:Ah,smoothstep:Ih,smootherstep:gh,randInt:Ch,randFloat:Bh,randFloatSpread:Qh,seededRandom:Eh,degToRad:ih,radToDeg:oh,isPowerOfTwo:eh,ceilPowerOfTwo:th,floorPowerOfTwo:ah,setQuaternionFromProperEuler:Dh,normalize:QI,denormalize:cg};class JA{constructor(A=0,I=0){JA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=OA(this.x,A.x,I.x),this.y=OA(this.y,A.y,I.y),this}clampScalar(A,I){return this.x=OA(this.x,A,I),this.y=OA(this.y,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(OA(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(OA(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fA{constructor(A,I,g,C,Q,E,i,o,e){fA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e)}set(A,I,g,C,Q,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=Q,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],D=g[2],h=g[5],n=g[8],w=C[0],S=C[3],r=C[6],M=C[1],U=C[4],k=C[7],d=C[2],F=C[5],K=C[8];return Q[0]=E*w+i*M+o*d,Q[3]=E*S+i*U+o*F,Q[6]=E*r+i*k+o*K,Q[1]=e*w+t*M+a*d,Q[4]=e*S+t*U+a*F,Q[7]=e*r+t*k+a*K,Q[2]=D*w+h*M+n*d,Q[5]=D*S+h*U+n*F,Q[8]=D*r+h*k+n*K,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*Q*t+g*i*o+C*Q*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,D=i*o-t*Q,h=e*Q-E*o,n=I*a+g*D+C*h;if(n===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/n;return A[0]=a*w,A[1]=(C*e-t*g)*w,A[2]=(i*g-C*E)*w,A[3]=D*w,A[4]=(t*I-C*o)*w,A[5]=(C*Q-i*I)*w,A[6]=h*w,A[7]=(g*o-e*I)*w,A[8]=(E*I-g*Q)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),e=Math.sin(Q);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(Ri.makeScale(A,I)),this}rotate(A){return this.premultiply(Ri.makeRotation(-A)),this}translate(A,I){return this.premultiply(Ri.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Ri=new fA;function Pe(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function WB(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function sh(){const B=WB("canvas");return B.style.display="block",B}const je={};function iB(B){B in je||(je[B]=!0,console.warn(B))}function hh(B,A,I){return new Promise(function(g,C){function Q(){switch(B.clientWaitSync(A,B.SYNC_FLUSH_COMMANDS_BIT,0)){case B.WAIT_FAILED:C();break;case B.TIMEOUT_EXPIRED:setTimeout(Q,I);break;default:g()}}setTimeout(Q,I)})}function rh(B){const A=B.elements;A[2]=.5*A[2]+.5*A[3],A[6]=.5*A[6]+.5*A[7],A[10]=.5*A[10]+.5*A[11],A[14]=.5*A[14]+.5*A[15]}function Sh(B){const A=B.elements;A[11]===-1?(A[10]=-A[10]-1,A[14]=-A[14]):(A[10]=-A[10],A[14]=-A[14]+1)}const Ve=new fA().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xe=new fA().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nh(){const B={enabled:!0,workingColorSpace:PI,spaces:{},convert:function(C,Q,E){return this.enabled===!1||Q===E||!Q||!E||(this.spaces[Q].transfer===oI&&(C.r=jg(C.r),C.g=jg(C.g),C.b=jg(C.b)),this.spaces[Q].primaries!==this.spaces[E].primaries&&(C.applyMatrix3(this.spaces[Q].toXYZ),C.applyMatrix3(this.spaces[E].fromXYZ)),this.spaces[E].transfer===oI&&(C.r=oB(C.r),C.g=oB(C.g),C.b=oB(C.b))),C},fromWorkingColorSpace:function(C,Q){return this.convert(C,this.workingColorSpace,Q)},toWorkingColorSpace:function(C,Q){return this.convert(C,Q,this.workingColorSpace)},getPrimaries:function(C){return this.spaces[C].primaries},getTransfer:function(C){return C===aC?YQ:this.spaces[C].transfer},getLuminanceCoefficients:function(C,Q=this.workingColorSpace){return C.fromArray(this.spaces[Q].luminanceCoefficients)},define:function(C){Object.assign(this.spaces,C)},_getMatrix:function(C,Q,E){return C.copy(this.spaces[Q].toXYZ).multiply(this.spaces[E].fromXYZ)},_getDrawingBufferColorSpace:function(C){return this.spaces[C].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(C=this.workingColorSpace){return this.spaces[C].workingColorSpaceConfig.unpackColorSpace}},A=[.64,.33,.3,.6,.15,.06],I=[.2126,.7152,.0722],g=[.3127,.329];return B.define({[PI]:{primaries:A,whitePoint:g,transfer:YQ,toXYZ:Ve,fromXYZ:Xe,luminanceCoefficients:I,workingColorSpaceConfig:{unpackColorSpace:mI},outputColorSpaceConfig:{drawingBufferColorSpace:mI}},[mI]:{primaries:A,whitePoint:g,transfer:oI,toXYZ:Ve,fromXYZ:Xe,luminanceCoefficients:I,outputColorSpaceConfig:{drawingBufferColorSpace:mI}}}),B}const PA=nh();function jg(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function oB(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}let eB;class wh{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{eB===void 0&&(eB=WB("canvas")),eB.width=A.width,eB.height=A.height;const g=eB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=eB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=WB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=jg(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(jg(I[g]/255)*255):I[g]=jg(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let ch=0;class ze{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=wg(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(pi(C[E].image)):Q.push(pi(C[E]))}else Q=pi(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function pi(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?wh.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lh=0;class LI extends KC{constructor(A=LI.DEFAULT_IMAGE,I=LI.DEFAULT_MAPPING,g=tC,C=tC,Q=Ig,E=Zg,i=eg,o=Wg,e=LI.DEFAULT_ANISOTROPY,t=aC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=wg(),this.name="",this.source=new ze(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new JA(0,0),this.repeat=new JA(1,1),this.center=new JA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=t,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Ke)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case IB:A.x=A.x-Math.floor(A.x);break;case tC:A.x=A.x<0?0:1;break;case KQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case IB:A.y=A.y-Math.floor(A.y);break;case tC:A.y=A.y<0?0:1;break;case KQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}LI.DEFAULT_IMAGE=null,LI.DEFAULT_MAPPING=Ke,LI.DEFAULT_ANISOTROPY=1;class CI{constructor(A=0,I=0,g=0,C=1){CI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const E=A.elements,i=E[0],o=E[4],e=E[8],t=E[1],a=E[5],D=E[9],h=E[2],n=E[6],w=E[10];if(Math.abs(o-t)<.01&&Math.abs(e-h)<.01&&Math.abs(D-n)<.01){if(Math.abs(o+t)<.1&&Math.abs(e+h)<.1&&Math.abs(D+n)<.1&&Math.abs(i+a+w-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const r=(i+1)/2,M=(a+1)/2,U=(w+1)/2,k=(o+t)/4,d=(e+h)/4,F=(D+n)/4;return r>M&&r>U?r<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(r),C=k/g,Q=d/g):M>U?M<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(M),g=k/C,Q=F/C):U<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(U),g=d/Q,C=F/Q),this.set(g,C,Q,I),this}let S=Math.sqrt((n-D)*(n-D)+(e-h)*(e-h)+(t-o)*(t-o));return Math.abs(S)<.001&&(S=1),this.x=(n-D)/S,this.y=(e-h)/S,this.z=(t-o)/S,this.w=Math.acos((i+a+w-1)/2),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this.w=I[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=OA(this.x,A.x,I.x),this.y=OA(this.y,A.y,I.y),this.z=OA(this.z,A.z,I.z),this.w=OA(this.w,A.w,I.w),this}clampScalar(A,I){return this.x=OA(this.x,A,I),this.y=OA(this.y,A,I),this.z=OA(this.z,A,I),this.w=OA(this.w,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(OA(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gh extends KC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new CI(0,0,A,I),this.scissorTest=!1,this.viewport=new CI(0,0,A,I);const C={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ig,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const Q=new LI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);Q.flipY=!1,Q.generateMipmaps=g.generateMipmaps,Q.internalFormat=g.internalFormat,this.textures=[];const E=g.count;for(let i=0;i<E;i++)this.textures[i]=Q.clone(),this.textures[i].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,Q=this.textures.length;C<Q;C++)this.textures[C].image.width=A,this.textures[C].image.height=I,this.textures[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,C=A.textures.length;g<C;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new ze(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class JC extends Gh{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class $e extends LI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=WI,this.minFilter=WI,this.wrapR=tC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class kh extends LI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=WI,this.minFilter=WI,this.wrapR=tC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const D=Q[E+0],h=Q[E+1],n=Q[E+2],w=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=D,A[I+1]=h,A[I+2]=n,A[I+3]=w;return}if(a!==w||o!==D||e!==h||t!==n){let S=1-i;const r=o*D+e*h+t*n+a*w,M=r>=0?1:-1,U=1-r*r;if(U>Number.EPSILON){const d=Math.sqrt(U),F=Math.atan2(d,r*M);S=Math.sin(S*F)/d,i=Math.sin(i*F)/d}const k=i*M;if(o=o*S+D*k,e=e*S+h*k,t=t*S+n*k,a=a*S+w*k,S===1-i){const d=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=d,e*=d,t*=d,a*=d}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=Q[E],D=Q[E+1],h=Q[E+2],n=Q[E+3];return A[I]=i*n+t*a+o*h-e*D,A[I+1]=o*n+t*D+e*a-i*h,A[I+2]=e*n+t*h+i*D-o*a,A[I+3]=t*n-i*a-o*D-e*h,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(Q/2),D=o(g/2),h=o(C/2),n=o(Q/2);switch(E){case"XYZ":this._x=D*t*a+e*h*n,this._y=e*h*a-D*t*n,this._z=e*t*n+D*h*a,this._w=e*t*a-D*h*n;break;case"YXZ":this._x=D*t*a+e*h*n,this._y=e*h*a-D*t*n,this._z=e*t*n-D*h*a,this._w=e*t*a+D*h*n;break;case"ZXY":this._x=D*t*a-e*h*n,this._y=e*h*a+D*t*n,this._z=e*t*n+D*h*a,this._w=e*t*a-D*h*n;break;case"ZYX":this._x=D*t*a-e*h*n,this._y=e*h*a+D*t*n,this._z=e*t*n-D*h*a,this._w=e*t*a+D*h*n;break;case"YZX":this._x=D*t*a+e*h*n,this._y=e*h*a+D*t*n,this._z=e*t*n-D*h*a,this._w=e*t*a-D*h*n;break;case"XZY":this._x=D*t*a-e*h*n,this._y=e*h*a-D*t*n,this._z=e*t*n+D*h*a,this._w=e*t*a+D*h*n;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],D=g+i+a;if(D>0){const h=.5/Math.sqrt(D+1);this._w=.25/h,this._x=(t-o)*h,this._y=(Q-e)*h,this._z=(E-C)*h}else if(g>i&&g>a){const h=2*Math.sqrt(1+g-i-a);this._w=(t-o)/h,this._x=.25*h,this._y=(C+E)/h,this._z=(Q+e)/h}else if(i>a){const h=2*Math.sqrt(1+i-g-a);this._w=(Q-e)/h,this._x=(C+E)/h,this._y=.25*h,this._z=(o+t)/h}else{const h=2*Math.sqrt(1+a-g-i);this._w=(E-C)/h,this._x=(Q+e)/h,this._y=(o+t)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(OA(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-Q*o,this._y=C*t+E*o+Q*i-g*e,this._z=Q*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-Q*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const h=1-I;return this._w=h*E+I*this._w,this._x=h*g+I*this._x,this._y=h*C+I*this._y,this._z=h*Q+I*this._z,this.normalize(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,D=Math.sin(I*t)/e;return this._w=E*a+this._w*D,this._x=g*a+this._x*D,this._y=C*a+this._y*D,this._z=Q*a+this._z*D,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),C=Math.sqrt(1-g),Q=Math.sqrt(g);return this.set(C*Math.sin(A),C*Math.cos(A),Q*Math.sin(I),Q*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(A=0,I=0,g=0){R.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(At.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(At.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,e=2*(E*C-i*g),t=2*(i*I-Q*C),a=2*(Q*g-E*I);return this.x=I+o*e+E*a-i*t,this.y=g+o*t+i*e-Q*a,this.z=C+o*a+Q*t-E*e,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=OA(this.x,A.x,I.x),this.y=OA(this.y,A.y,I.y),this.z=OA(this.z,A.z,I.z),this}clampScalar(A,I){return this.x=OA(this.x,A,I),this.y=OA(this.y,A,I),this.z=OA(this.z,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(OA(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return di.copy(this).projectOnVector(A),this.sub(di)}reflect(A){return this.sub(di.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(OA(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const di=new R,At=new dg;class gg{constructor(A=new R(1/0,1/0,1/0),I=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(lg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(lg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=lg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=Q.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,lg):lg.fromBufferAttribute(Q,E),lg.applyMatrix4(A.matrixWorld),this.expandByPoint(lg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),uQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),uQ.copy(g.boundingBox)),uQ.applyMatrix4(A.matrixWorld),this.union(uQ)}const C=A.children;for(let Q=0,E=C.length;Q<E;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,lg),lg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(PB),HQ.subVectors(this.max,PB),tB.subVectors(A.a,PB),aB.subVectors(A.b,PB),DB.subVectors(A.c,PB),DC.subVectors(aB,tB),sC.subVectors(DB,aB),FC.subVectors(tB,DB);let I=[0,-DC.z,DC.y,0,-sC.z,sC.y,0,-FC.z,FC.y,DC.z,0,-DC.x,sC.z,0,-sC.x,FC.z,0,-FC.x,-DC.y,DC.x,0,-sC.y,sC.x,0,-FC.y,FC.x,0];return!qi(I,tB,aB,DB,HQ)||(I=[1,0,0,0,1,0,0,0,1],!qi(I,tB,aB,DB,HQ))?!1:(mQ.crossVectors(DC,sC),I=[mQ.x,mQ.y,mQ.z],qi(I,tB,aB,DB,HQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,lg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(lg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Vg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Vg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Vg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Vg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Vg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Vg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Vg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Vg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Vg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Vg=[new R,new R,new R,new R,new R,new R,new R,new R],lg=new R,uQ=new gg,tB=new R,aB=new R,DB=new R,DC=new R,sC=new R,FC=new R,PB=new R,HQ=new R,mQ=new R,RC=new R;function qi(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){RC.fromArray(B,Q);const i=C.x*Math.abs(RC.x)+C.y*Math.abs(RC.y)+C.z*Math.abs(RC.z),o=A.dot(RC),e=I.dot(RC),t=g.dot(RC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const yh=new gg,jB=new R,Yi=new R;class qg{constructor(A=new R,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):yh.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;jB.subVectors(A,this.center);const I=jB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(jB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Yi.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(jB.copy(A.center).add(Yi)),this.expandByPoint(jB.copy(A.center).sub(Yi))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xg=new R,Li=new R,fQ=new R,hC=new R,ui=new R,TQ=new R,Hi=new R;class sB{constructor(A=new R,I=new R(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Xg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=Xg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(Xg.copy(this.origin).addScaledVector(this.direction,I),Xg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){Li.copy(A).add(I).multiplyScalar(.5),fQ.copy(I).sub(A).normalize(),hC.copy(this.origin).sub(Li);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(fQ),i=hC.dot(this.direction),o=-hC.dot(fQ),e=hC.lengthSq(),t=Math.abs(1-E*E);let a,D,h,n;if(t>0)if(a=E*o-i,D=E*i-o,n=Q*t,a>=0)if(D>=-n)if(D<=n){const w=1/t;a*=w,D*=w,h=a*(a+E*D+2*i)+D*(E*a+D+2*o)+e}else D=Q,a=Math.max(0,-(E*D+i)),h=-a*a+D*(D+2*o)+e;else D=-Q,a=Math.max(0,-(E*D+i)),h=-a*a+D*(D+2*o)+e;else D<=-n?(a=Math.max(0,-(-E*Q+i)),D=a>0?-Q:Math.min(Math.max(-Q,-o),Q),h=-a*a+D*(D+2*o)+e):D<=n?(a=0,D=Math.min(Math.max(-Q,-o),Q),h=D*(D+2*o)+e):(a=Math.max(0,-(E*Q+i)),D=a>0?Q:Math.min(Math.max(-Q,-o),Q),h=-a*a+D*(D+2*o)+e);else D=E>0?-Q:Q,a=Math.max(0,-(E*D+i)),h=-a*a+D*(D+2*o)+e;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(Li).addScaledVector(fQ,D),h}intersectSphere(A,I){Xg.subVectors(A.center,this.origin);const g=Xg.dot(this.direction),C=Xg.dot(Xg)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,D=this.origin;return e>=0?(g=(A.min.x-D.x)*e,C=(A.max.x-D.x)*e):(g=(A.max.x-D.x)*e,C=(A.min.x-D.x)*e),t>=0?(Q=(A.min.y-D.y)*t,E=(A.max.y-D.y)*t):(Q=(A.max.y-D.y)*t,E=(A.min.y-D.y)*t),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-D.z)*a,o=(A.max.z-D.z)*a):(i=(A.max.z-D.z)*a,o=(A.min.z-D.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,Xg)!==null}intersectTriangle(A,I,g,C,Q){ui.subVectors(I,A),TQ.subVectors(g,A),Hi.crossVectors(ui,TQ);let E=this.direction.dot(Hi),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;hC.subVectors(this.origin,A);const o=i*this.direction.dot(TQ.crossVectors(hC,TQ));if(o<0)return null;const e=i*this.direction.dot(ui.cross(hC));if(e<0||o+e>E)return null;const t=-i*hC.dot(Hi);return t<0?null:this.at(t/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class LA{constructor(A,I,g,C,Q,E,i,o,e,t,a,D,h,n,w,S){LA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e,t,a,D,h,n,w,S)}set(A,I,g,C,Q,E,i,o,e,t,a,D,h,n,w,S){const r=this.elements;return r[0]=A,r[4]=I,r[8]=g,r[12]=C,r[1]=Q,r[5]=E,r[9]=i,r[13]=o,r[2]=e,r[6]=t,r[10]=a,r[14]=D,r[3]=h,r[7]=n,r[11]=w,r[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new LA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/hB.setFromMatrixColumn(A,0).length(),Q=1/hB.setFromMatrixColumn(A,1).length(),E=1/hB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const D=E*t,h=E*a,n=i*t,w=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=h+n*e,I[5]=D-w*e,I[9]=-i*o,I[2]=w-D*e,I[6]=n+h*e,I[10]=E*o}else if(A.order==="YXZ"){const D=o*t,h=o*a,n=e*t,w=e*a;I[0]=D+w*i,I[4]=n*i-h,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=h*i-n,I[6]=w+D*i,I[10]=E*o}else if(A.order==="ZXY"){const D=o*t,h=o*a,n=e*t,w=e*a;I[0]=D-w*i,I[4]=-E*a,I[8]=n+h*i,I[1]=h+n*i,I[5]=E*t,I[9]=w-D*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const D=E*t,h=E*a,n=i*t,w=i*a;I[0]=o*t,I[4]=n*e-h,I[8]=D*e+w,I[1]=o*a,I[5]=w*e+D,I[9]=h*e-n,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const D=E*o,h=E*e,n=i*o,w=i*e;I[0]=o*t,I[4]=w-D*a,I[8]=n*a+h,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=h*a+n,I[10]=D-w*a}else if(A.order==="XZY"){const D=E*o,h=E*e,n=i*o,w=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=D*a+w,I[5]=E*t,I[9]=h*a-n,I[2]=n*a-h,I[6]=i*t,I[10]=w*a+D}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Uh,A,Mh)}lookAt(A,I,g){const C=this.elements;return Cg.subVectors(A,I),Cg.lengthSq()===0&&(Cg.z=1),Cg.normalize(),rC.crossVectors(g,Cg),rC.lengthSq()===0&&(Math.abs(g.z)===1?Cg.x+=1e-4:Cg.z+=1e-4,Cg.normalize(),rC.crossVectors(g,Cg)),rC.normalize(),xQ.crossVectors(Cg,rC),C[0]=rC.x,C[4]=xQ.x,C[8]=Cg.x,C[1]=rC.y,C[5]=xQ.y,C[9]=Cg.y,C[2]=rC.z,C[6]=xQ.z,C[10]=Cg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],D=g[9],h=g[13],n=g[2],w=g[6],S=g[10],r=g[14],M=g[3],U=g[7],k=g[11],d=g[15],F=C[0],K=C[4],q=C[8],y=C[12],G=C[1],Y=C[5],O=C[9],v=C[13],P=C[2],IA=C[6],W=C[10],gA=C[14],Z=C[3],QA=C[7],wA=C[11],HA=C[15];return Q[0]=E*F+i*G+o*P+e*Z,Q[4]=E*K+i*Y+o*IA+e*QA,Q[8]=E*q+i*O+o*W+e*wA,Q[12]=E*y+i*v+o*gA+e*HA,Q[1]=t*F+a*G+D*P+h*Z,Q[5]=t*K+a*Y+D*IA+h*QA,Q[9]=t*q+a*O+D*W+h*wA,Q[13]=t*y+a*v+D*gA+h*HA,Q[2]=n*F+w*G+S*P+r*Z,Q[6]=n*K+w*Y+S*IA+r*QA,Q[10]=n*q+w*O+S*W+r*wA,Q[14]=n*y+w*v+S*gA+r*HA,Q[3]=M*F+U*G+k*P+d*Z,Q[7]=M*K+U*Y+k*IA+d*QA,Q[11]=M*q+U*O+k*W+d*wA,Q[15]=M*y+U*v+k*gA+d*HA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],D=A[10],h=A[14],n=A[3],w=A[7],S=A[11],r=A[15];return n*(+Q*o*a-C*e*a-Q*i*D+g*e*D+C*i*h-g*o*h)+w*(+I*o*h-I*e*D+Q*E*D-C*E*h+C*e*t-Q*o*t)+S*(+I*e*a-I*i*h-Q*E*a+g*E*h+Q*i*t-g*e*t)+r*(-C*i*t-I*o*a+I*i*D+C*E*a-g*E*D+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],D=A[10],h=A[11],n=A[12],w=A[13],S=A[14],r=A[15],M=a*S*e-w*D*e+w*o*h-i*S*h-a*o*r+i*D*r,U=n*D*e-t*S*e-n*o*h+E*S*h+t*o*r-E*D*r,k=t*w*e-n*a*e+n*i*h-E*w*h-t*i*r+E*a*r,d=n*a*o-t*w*o-n*i*D+E*w*D+t*i*S-E*a*S,F=I*M+g*U+C*k+Q*d;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/F;return A[0]=M*K,A[1]=(w*D*Q-a*S*Q-w*C*h+g*S*h+a*C*r-g*D*r)*K,A[2]=(i*S*Q-w*o*Q+w*C*e-g*S*e-i*C*r+g*o*r)*K,A[3]=(a*o*Q-i*D*Q-a*C*e+g*D*e+i*C*h-g*o*h)*K,A[4]=U*K,A[5]=(t*S*Q-n*D*Q+n*C*h-I*S*h-t*C*r+I*D*r)*K,A[6]=(n*o*Q-E*S*Q-n*C*e+I*S*e+E*C*r-I*o*r)*K,A[7]=(E*D*Q-t*o*Q+t*C*e-I*D*e-E*C*h+I*o*h)*K,A[8]=k*K,A[9]=(n*a*Q-t*w*Q-n*g*h+I*w*h+t*g*r-I*a*r)*K,A[10]=(E*w*Q-n*i*Q+n*g*e-I*w*e-E*g*r+I*i*r)*K,A[11]=(t*i*Q-E*a*Q-t*g*e+I*a*e+E*g*h-I*i*h)*K,A[12]=d*K,A[13]=(t*w*C-n*a*C+n*g*D-I*w*D-t*g*S+I*a*S)*K,A[14]=(n*i*C-E*w*C-n*g*o+I*w*o+E*g*S-I*i*S)*K,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*D+I*i*D)*K,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,e=Q*E,t=Q*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,e=Q+Q,t=E+E,a=i+i,D=Q*e,h=Q*t,n=Q*a,w=E*t,S=E*a,r=i*a,M=o*e,U=o*t,k=o*a,d=g.x,F=g.y,K=g.z;return C[0]=(1-(w+r))*d,C[1]=(h+k)*d,C[2]=(n-U)*d,C[3]=0,C[4]=(h-k)*F,C[5]=(1-(D+r))*F,C[6]=(S+M)*F,C[7]=0,C[8]=(n+U)*K,C[9]=(S-M)*K,C[10]=(1-(D+w))*K,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=hB.set(C[0],C[1],C[2]).length();const E=hB.set(C[4],C[5],C[6]).length(),i=hB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],Gg.copy(this);const o=1/Q,e=1/E,t=1/i;return Gg.elements[0]*=o,Gg.elements[1]*=o,Gg.elements[2]*=o,Gg.elements[4]*=e,Gg.elements[5]*=e,Gg.elements[6]*=e,Gg.elements[8]*=t,Gg.elements[9]*=t,Gg.elements[10]*=t,I.setFromRotationMatrix(Gg),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E,i=Pg){const o=this.elements,e=2*Q/(I-A),t=2*Q/(g-C),a=(I+A)/(I-A),D=(g+C)/(g-C);let h,n;if(i===Pg)h=-(E+Q)/(E-Q),n=-2*E*Q/(E-Q);else if(i===LQ)h=-E/(E-Q),n=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=e,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=t,o[9]=D,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=n,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,Q,E,i=Pg){const o=this.elements,e=1/(I-A),t=1/(g-C),a=1/(E-Q),D=(I+A)*e,h=(g+C)*t;let n,w;if(i===Pg)n=(E+Q)*a,w=-2*a;else if(i===LQ)n=Q*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*e,o[4]=0,o[8]=0,o[12]=-D,o[1]=0,o[5]=2*t,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=w,o[14]=-n,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const hB=new R,Gg=new LA,Uh=new R(0,0,0),Mh=new R(1,1,1),rC=new R,xQ=new R,Cg=new R,It=new LA,gt=new dg;class Yg{constructor(A=0,I=0,g=0,C=Yg.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],D=C[6],h=C[10];switch(I){case"XYZ":this._y=Math.asin(OA(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,h),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(D,e),this._z=0);break;case"YXZ":this._x=Math.asin(-OA(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,h),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(OA(D,-1,1)),Math.abs(D)<.9999999?(this._y=Math.atan2(-a,h),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-OA(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(D,h),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(OA(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,h));break;case"XZY":this._z=Math.asin(-OA(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(D,e),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-t,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return It.makeRotationFromQuaternion(A),this.setFromRotationMatrix(It,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return gt.setFromEuler(this),this.setFromQuaternion(gt,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yg.DEFAULT_ORDER="XYZ";class mi{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Nh=0;const Ct=new R,rB=new dg,zg=new LA,bQ=new R,VB=new R,Kh=new R,Jh=new dg,Bt=new R(1,0,0),Qt=new R(0,1,0),Et=new R(0,0,1),it={type:"added"},Fh={type:"removed"},SB={type:"childadded",child:null},fi={type:"childremoved",child:null};class SI extends KC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=wg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=SI.DEFAULT_UP.clone();const A=new R,I=new Yg,g=new dg,C=new R(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new LA},normalMatrix:{value:new fA}}),this.matrix=new LA,this.matrixWorld=new LA,this.matrixAutoUpdate=SI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=SI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return rB.setFromAxisAngle(A,I),this.quaternion.multiply(rB),this}rotateOnWorldAxis(A,I){return rB.setFromAxisAngle(A,I),this.quaternion.premultiply(rB),this}rotateX(A){return this.rotateOnAxis(Bt,A)}rotateY(A){return this.rotateOnAxis(Qt,A)}rotateZ(A){return this.rotateOnAxis(Et,A)}translateOnAxis(A,I){return Ct.copy(A).applyQuaternion(this.quaternion),this.position.add(Ct.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Bt,A)}translateY(A){return this.translateOnAxis(Qt,A)}translateZ(A){return this.translateOnAxis(Et,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(zg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?bQ.copy(A):bQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),VB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zg.lookAt(VB,bQ,this.up):zg.lookAt(bQ,VB,this.up),this.quaternion.setFromRotationMatrix(zg),C&&(zg.extractRotation(C.matrixWorld),rB.setFromRotationMatrix(zg),this.quaternion.premultiply(rB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(it),SB.child=A,this.dispatchEvent(SB),SB.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Fh),fi.child=A,this.dispatchEvent(fi),fi.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),zg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),zg.multiply(A.parent.matrixWorld)),A.applyMatrix4(zg),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(it),SB.child=A,this.dispatchEvent(SB),SB.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const Q=this.children[g].getObjectByProperty(A,I);if(Q!==void 0)return Q}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(VB,A,Kh),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(VB,Jh,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].updateMatrixWorld(A)}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].updateWorldMatrix(!1,!0)}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),C.maxInstanceCount=this._maxInstanceCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(C.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),D=E(A.skeletons),h=E(A.animations),n=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),D.length>0&&(g.skeletons=D),h.length>0&&(g.animations=h),n.length>0&&(g.nodes=n)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}SI.DEFAULT_UP=new R(0,1,0),SI.DEFAULT_MATRIX_AUTO_UPDATE=!0,SI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kg=new R,$g=new R,Ti=new R,AC=new R,nB=new R,wB=new R,ot=new R,xi=new R,bi=new R,Oi=new R,_i=new CI,vi=new CI,Zi=new CI;class yg{constructor(A=new R,I=new R,g=new R){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),kg.subVectors(A,I),C.cross(kg);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){kg.subVectors(C,I),$g.subVectors(g,I),Ti.subVectors(A,I);const E=kg.dot(kg),i=kg.dot($g),o=kg.dot(Ti),e=$g.dot($g),t=$g.dot(Ti),a=E*e-i*i;if(a===0)return Q.set(0,0,0),null;const D=1/a,h=(e*o-i*t)*D,n=(E*t-i*o)*D;return Q.set(1-h-n,n,h)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,AC)===null?!1:AC.x>=0&&AC.y>=0&&AC.x+AC.y<=1}static getInterpolation(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,AC)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(Q,AC.x),o.addScaledVector(E,AC.y),o.addScaledVector(i,AC.z),o)}static getInterpolatedAttribute(A,I,g,C,Q,E){return _i.setScalar(0),vi.setScalar(0),Zi.setScalar(0),_i.fromBufferAttribute(A,I),vi.fromBufferAttribute(A,g),Zi.fromBufferAttribute(A,C),E.setScalar(0),E.addScaledVector(_i,Q.x),E.addScaledVector(vi,Q.y),E.addScaledVector(Zi,Q.z),E}static isFrontFacing(A,I,g,C){return kg.subVectors(g,I),$g.subVectors(A,I),kg.cross($g).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return kg.subVectors(this.c,this.b),$g.subVectors(this.a,this.b),kg.cross($g).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return yg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return yg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,Q){return yg.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return yg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return yg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;nB.subVectors(C,g),wB.subVectors(Q,g),xi.subVectors(A,g);const o=nB.dot(xi),e=wB.dot(xi);if(o<=0&&e<=0)return I.copy(g);bi.subVectors(A,C);const t=nB.dot(bi),a=wB.dot(bi);if(t>=0&&a<=t)return I.copy(C);const D=o*a-t*e;if(D<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(nB,E);Oi.subVectors(A,Q);const h=nB.dot(Oi),n=wB.dot(Oi);if(n>=0&&h<=n)return I.copy(Q);const w=h*e-o*n;if(w<=0&&e>=0&&n<=0)return i=e/(e-n),I.copy(g).addScaledVector(wB,i);const S=t*n-h*a;if(S<=0&&a-t>=0&&h-n>=0)return ot.subVectors(Q,C),i=(a-t)/(a-t+(h-n)),I.copy(C).addScaledVector(ot,i);const r=1/(S+w+D);return E=w*r,i=D*r,I.copy(g).addScaledVector(nB,E).addScaledVector(wB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const et={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},SC={h:0,s:0,l:0},OQ={h:0,s:0,l:0};function Wi(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}class FA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=mI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,PA.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=PA.workingColorSpace){return this.r=A,this.g=I,this.b=g,PA.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=PA.workingColorSpace){if(A=Fi(A,1),I=OA(I,0,1),g=OA(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=Wi(E,Q,A+1/3),this.g=Wi(E,Q,A),this.b=Wi(E,Q,A-1/3)}return PA.toWorkingColorSpace(this,C),this}setStyle(A,I=mI){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=mI){const g=et[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=jg(A.r),this.g=jg(A.g),this.b=jg(A.b),this}copyLinearToSRGB(A){return this.r=oB(A.r),this.g=oB(A.g),this.b=oB(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=mI){return PA.fromWorkingColorSpace(OI.copy(this),A),Math.round(OA(OI.r*255,0,255))*65536+Math.round(OA(OI.g*255,0,255))*256+Math.round(OA(OI.b*255,0,255))}getHexString(A=mI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=PA.workingColorSpace){PA.fromWorkingColorSpace(OI.copy(this),I);const g=OI.r,C=OI.g,Q=OI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=PA.workingColorSpace){return PA.fromWorkingColorSpace(OI.copy(this),I),A.r=OI.r,A.g=OI.g,A.b=OI.b,A}getStyle(A=mI){PA.fromWorkingColorSpace(OI.copy(this),A);const I=OI.r,g=OI.g,C=OI.b;return A!==mI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(SC),this.setHSL(SC.h+A,SC.s+I,SC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(SC),A.getHSL(OQ);const g=ZB(SC.h,OQ.h,I),C=ZB(SC.s,OQ.s,I),Q=ZB(SC.l,OQ.l,I);return this.setHSL(g,C,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*C,this.g=Q[1]*I+Q[4]*g+Q[7]*C,this.b=Q[2]*I+Q[5]*g+Q[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const OI=new FA;FA.NAMES=et;let Rh=0;class Lg extends KC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=wg(),this.name="",this.type="Material",this.blending=XC,this.side=vg,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uE,this.blendDst=HE,this.blendEquation=MC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new FA(0,0,0),this.blendAlpha=0,this.depthFunc=zC,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oe,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=QB,this.stencilZFail=QB,this.stencilZPass=QB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==XC&&(g.blending=this.blending),this.side!==vg&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==uE&&(g.blendSrc=this.blendSrc),this.blendDst!==HE&&(g.blendDst=this.blendDst),this.blendEquation!==MC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==zC&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oe&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==QB&&(g.stencilFail=this.stencilFail),this.stencilZFail!==QB&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==QB&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ug extends Lg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new FA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yg,this.combine=Me,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const NI=new R,_Q=new JA;class _I{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Ji,this.updateRanges=[],this.gpuType=ng,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)_Q.fromBufferAttribute(this,I),_Q.applyMatrix3(A),this.setXY(I,_Q.x,_Q.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)NI.fromBufferAttribute(this,I),NI.applyMatrix3(A),this.setXYZ(I,NI.x,NI.y,NI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)NI.fromBufferAttribute(this,I),NI.applyMatrix4(A),this.setXYZ(I,NI.x,NI.y,NI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)NI.fromBufferAttribute(this,I),NI.applyNormalMatrix(A),this.setXYZ(I,NI.x,NI.y,NI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)NI.fromBufferAttribute(this,I),NI.transformDirection(A),this.setXYZ(I,NI.x,NI.y,NI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=cg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=QI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=cg(I,this.array)),I}setX(A,I){return this.normalized&&(I=QI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=cg(I,this.array)),I}setY(A,I){return this.normalized&&(I=QI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=cg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=QI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=cg(I,this.array)),I}setW(A,I){return this.normalized&&(I=QI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array),C=QI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array),C=QI(C,this.array),Q=QI(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Ji&&(A.usage=this.usage),A}}class tt extends _I{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class at extends _I{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class tg extends _I{constructor(A,I,g){super(new Float32Array(A),I,g)}}let ph=0;const ag=new LA,Pi=new SI,cB=new R,Bg=new gg,XB=new gg,uI=new R;class Ug extends KC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=wg(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Pe(A)?at:tt)(A,1):this.index=A,this}setIndirect(A){return this.indirect=A,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new fA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return ag.makeRotationFromQuaternion(A),this.applyMatrix4(ag),this}rotateX(A){return ag.makeRotationX(A),this.applyMatrix4(ag),this}rotateY(A){return ag.makeRotationY(A),this.applyMatrix4(ag),this}rotateZ(A){return ag.makeRotationZ(A),this.applyMatrix4(ag),this}translate(A,I,g){return ag.makeTranslation(A,I,g),this.applyMatrix4(ag),this}scale(A,I,g){return ag.makeScale(A,I,g),this.applyMatrix4(ag),this}lookAt(A){return Pi.lookAt(A),Pi.updateMatrix(),this.applyMatrix4(Pi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cB).negate(),this.translate(cB.x,cB.y,cB.z),this}setFromPoints(A){const I=this.getAttribute("position");if(I===void 0){const g=[];for(let C=0,Q=A.length;C<Q;C++){const E=A[C];g.push(E.x,E.y,E.z||0)}this.setAttribute("position",new tg(g,3))}else{const g=Math.min(A.length,I.count);for(let C=0;C<g;C++){const Q=A[C];I.setXYZ(C,Q.x,Q.y,Q.z||0)}A.length>I.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),I.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];Bg.setFromBufferAttribute(Q),this.morphTargetsRelative?(uI.addVectors(this.boundingBox.min,Bg.min),this.boundingBox.expandByPoint(uI),uI.addVectors(this.boundingBox.max,Bg.max),this.boundingBox.expandByPoint(uI)):(this.boundingBox.expandByPoint(Bg.min),this.boundingBox.expandByPoint(Bg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(A){const g=this.boundingSphere.center;if(Bg.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];XB.setFromBufferAttribute(i),this.morphTargetsRelative?(uI.addVectors(Bg.min,XB.min),Bg.expandByPoint(uI),uI.addVectors(Bg.max,XB.max),Bg.expandByPoint(uI)):(Bg.expandByPoint(XB.min),Bg.expandByPoint(XB.max))}Bg.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)uI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(uI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)uI.fromBufferAttribute(i,e),o&&(cB.fromBufferAttribute(A,e),uI.add(cB)),C=Math.max(C,g.distanceToSquared(uI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,C=I.normal,Q=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _I(new Float32Array(4*g.count),4));const E=this.getAttribute("tangent"),i=[],o=[];for(let q=0;q<g.count;q++)i[q]=new R,o[q]=new R;const e=new R,t=new R,a=new R,D=new JA,h=new JA,n=new JA,w=new R,S=new R;function r(q,y,G){e.fromBufferAttribute(g,q),t.fromBufferAttribute(g,y),a.fromBufferAttribute(g,G),D.fromBufferAttribute(Q,q),h.fromBufferAttribute(Q,y),n.fromBufferAttribute(Q,G),t.sub(e),a.sub(e),h.sub(D),n.sub(D);const Y=1/(h.x*n.y-n.x*h.y);isFinite(Y)&&(w.copy(t).multiplyScalar(n.y).addScaledVector(a,-h.y).multiplyScalar(Y),S.copy(a).multiplyScalar(h.x).addScaledVector(t,-n.x).multiplyScalar(Y),i[q].add(w),i[y].add(w),i[G].add(w),o[q].add(S),o[y].add(S),o[G].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:A.count}]);for(let q=0,y=M.length;q<y;++q){const G=M[q],Y=G.start,O=G.count;for(let v=Y,P=Y+O;v<P;v+=3)r(A.getX(v+0),A.getX(v+1),A.getX(v+2))}const U=new R,k=new R,d=new R,F=new R;function K(q){d.fromBufferAttribute(C,q),F.copy(d);const y=i[q];U.copy(y),U.sub(d.multiplyScalar(d.dot(y))).normalize(),k.crossVectors(F,y);const G=k.dot(o[q])<0?-1:1;E.setXYZW(q,U.x,U.y,U.z,G)}for(let q=0,y=M.length;q<y;++q){const G=M[q],Y=G.start,O=G.count;for(let v=Y,P=Y+O;v<P;v+=3)K(A.getX(v+0)),K(A.getX(v+1)),K(A.getX(v+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new _I(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let D=0,h=g.count;D<h;D++)g.setXYZ(D,0,0,0);const C=new R,Q=new R,E=new R,i=new R,o=new R,e=new R,t=new R,a=new R;if(A)for(let D=0,h=A.count;D<h;D+=3){const n=A.getX(D+0),w=A.getX(D+1),S=A.getX(D+2);C.fromBufferAttribute(I,n),Q.fromBufferAttribute(I,w),E.fromBufferAttribute(I,S),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),i.fromBufferAttribute(g,n),o.fromBufferAttribute(g,w),e.fromBufferAttribute(g,S),i.add(t),o.add(t),e.add(t),g.setXYZ(n,i.x,i.y,i.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(S,e.x,e.y,e.z)}else for(let D=0,h=I.count;D<h;D+=3)C.fromBufferAttribute(I,D+0),Q.fromBufferAttribute(I,D+1),E.fromBufferAttribute(I,D+2),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),g.setXYZ(D+0,t.x,t.y,t.z),g.setXYZ(D+1,t.x,t.y,t.z),g.setXYZ(D+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)uI.fromBufferAttribute(A,I),uI.normalize(),A.setXYZ(I,uI.x,uI.y,uI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,D=new e.constructor(o.length*t);let h=0,n=0;for(let w=0,S=o.length;w<S;w++){i.isInterleavedBufferAttribute?h=o[w]*i.data.stride+i.offset:h=o[w]*t;for(let r=0;r<t;r++)D[n++]=e[h++]}return new _I(D,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new Ug,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const Q=this.morphAttributes;for(const i in Q){const o=[],e=Q[i];for(let t=0,a=e.length;t<a;t++){const D=e[t],h=A(D,g);o.push(h)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,D=e.length;a<D;a++){const h=e[a];t.push(h.toJSON(A.data))}t.length>0&&(C[o]=t,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const Q=A.morphAttributes;for(const e in Q){const t=[],a=Q[e];for(let D=0,h=a.length;D<h;D++)t.push(a[D].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dt=new LA,pC=new sB,vQ=new qg,st=new R,ZQ=new R,WQ=new R,PQ=new R,ji=new R,jQ=new R,ht=new R,VQ=new R;class vI extends SI{constructor(A=new Ug,I=new ug){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){jQ.set(0,0,0);for(let o=0,e=Q.length;o<e;o++){const t=i[o],a=Q[o];t!==0&&(ji.fromBufferAttribute(a,A),E?jQ.addScaledVector(ji,t):jQ.addScaledVector(ji.sub(I),t))}I.add(jQ)}return I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),vQ.copy(g.boundingSphere),vQ.applyMatrix4(Q),pC.copy(A.ray).recast(A.near),!(vQ.containsPoint(pC.origin)===!1&&(pC.intersectSphere(vQ,st)===null||pC.origin.distanceToSquared(st)>(A.far-A.near)**2))&&(Dt.copy(Q).invert(),pC.copy(A.ray).applyMatrix4(Dt),!(g.boundingBox!==null&&pC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,pC)))}_computeIntersections(A,I,g){let C;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,e=Q.attributes.uv,t=Q.attributes.uv1,a=Q.attributes.normal,D=Q.groups,h=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let n=0,w=D.length;n<w;n++){const S=D[n],r=E[S.materialIndex],M=Math.max(S.start,h.start),U=Math.min(i.count,Math.min(S.start+S.count,h.start+h.count));for(let k=M,d=U;k<d;k+=3){const F=i.getX(k),K=i.getX(k+1),q=i.getX(k+2);C=XQ(this,r,A,g,e,t,a,F,K,q),C&&(C.faceIndex=Math.floor(k/3),C.face.materialIndex=S.materialIndex,I.push(C))}}else{const n=Math.max(0,h.start),w=Math.min(i.count,h.start+h.count);for(let S=n,r=w;S<r;S+=3){const M=i.getX(S),U=i.getX(S+1),k=i.getX(S+2);C=XQ(this,E,A,g,e,t,a,M,U,k),C&&(C.faceIndex=Math.floor(S/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let n=0,w=D.length;n<w;n++){const S=D[n],r=E[S.materialIndex],M=Math.max(S.start,h.start),U=Math.min(o.count,Math.min(S.start+S.count,h.start+h.count));for(let k=M,d=U;k<d;k+=3){const F=k,K=k+1,q=k+2;C=XQ(this,r,A,g,e,t,a,F,K,q),C&&(C.faceIndex=Math.floor(k/3),C.face.materialIndex=S.materialIndex,I.push(C))}}else{const n=Math.max(0,h.start),w=Math.min(o.count,h.start+h.count);for(let S=n,r=w;S<r;S+=3){const M=S,U=S+1,k=S+2;C=XQ(this,E,A,g,e,t,a,M,U,k),C&&(C.faceIndex=Math.floor(S/3),I.push(C))}}}}function dh(B,A,I,g,C,Q,E,i){let o;if(A.side===$I?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===vg,i),o===null)return null;VQ.copy(i),VQ.applyMatrix4(B.matrixWorld);const e=I.ray.origin.distanceTo(VQ);return e<I.near||e>I.far?null:{distance:e,point:VQ.clone(),object:B}}function XQ(B,A,I,g,C,Q,E,i,o,e){B.getVertexPosition(i,ZQ),B.getVertexPosition(o,WQ),B.getVertexPosition(e,PQ);const t=dh(B,A,I,g,ZQ,WQ,PQ,ht);if(t){const a=new R;yg.getBarycoord(ht,ZQ,WQ,PQ,a),C&&(t.uv=yg.getInterpolatedAttribute(C,i,o,e,a,new JA)),Q&&(t.uv1=yg.getInterpolatedAttribute(Q,i,o,e,a,new JA)),E&&(t.normal=yg.getInterpolatedAttribute(E,i,o,e,a,new R),t.normal.dot(g.direction)>0&&t.normal.multiplyScalar(-1));const D={a:i,b:o,c:e,normal:new R,materialIndex:0};yg.getNormal(ZQ,WQ,PQ,D.normal),t.face=D,t.barycoord=a}return t}class dC extends Ug{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],e=[],t=[],a=[];let D=0,h=0;n("z","y","x",-1,-1,g,I,A,E,Q,0),n("z","y","x",1,-1,g,I,-A,E,Q,1),n("x","z","y",1,1,A,g,I,C,E,2),n("x","z","y",1,-1,A,g,-I,C,E,3),n("x","y","z",1,-1,A,I,g,C,Q,4),n("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new tg(e,3)),this.setAttribute("normal",new tg(t,3)),this.setAttribute("uv",new tg(a,2));function n(w,S,r,M,U,k,d,F,K,q,y){const G=k/K,Y=d/q,O=k/2,v=d/2,P=F/2,IA=K+1,W=q+1;let gA=0,Z=0;const QA=new R;for(let wA=0;wA<W;wA++){const HA=wA*Y-v;for(let ZA=0;ZA<IA;ZA++){const sI=ZA*G-O;QA[w]=sI*M,QA[S]=HA*U,QA[r]=P,e.push(QA.x,QA.y,QA.z),QA[w]=0,QA[S]=0,QA[r]=F>0?1:-1,t.push(QA.x,QA.y,QA.z),a.push(ZA/K),a.push(1-wA/q),gA+=1}}for(let wA=0;wA<q;wA++)for(let HA=0;HA<K;HA++){const ZA=D+HA+IA*wA,sI=D+HA+IA*(wA+1),j=D+(HA+1)+IA*(wA+1),BA=D+(HA+1)+IA*wA;o.push(ZA,sI,BA),o.push(sI,j,BA),Z+=6}i.addGroup(h,Z,y),h+=Z,D+=gA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new dC(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function lB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function jI(B){const A={};for(let I=0;I<B.length;I++){const g=lB(B[I]);for(const C in g)A[C]=g[C]}return A}function qh(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function rt(B){const A=B.getRenderTarget();return A===null?B.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:PA.workingColorSpace}const Yh={clone:lB,merge:jI};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nC extends Lg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=lB(A.uniforms),this.uniformsGroups=qh(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const Q=this.uniforms[C].value;Q&&Q.isTexture?I.uniforms[C]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?I.uniforms[C]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?I.uniforms[C]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?I.uniforms[C]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?I.uniforms[C]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?I.uniforms[C]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?I.uniforms[C]={type:"m4",value:Q.toArray()}:I.uniforms[C]={value:Q}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class St extends SI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new LA,this.projectionMatrix=new LA,this.projectionMatrixInverse=new LA,this.coordinateSystem=Pg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wC=new R,nt=new JA,wt=new JA;class VI extends St{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=EB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(vB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return EB*2*Math.atan(Math.tan(vB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){wC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(wC.x,wC.y).multiplyScalar(-A/wC.z),wC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(wC.x,wC.y).multiplyScalar(-A/wC.z)}getViewSize(A,I){return this.getViewBounds(A,nt,wt),I.subVectors(wt,nt)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(vB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const GB=-90,kB=1;class Hh extends SI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new VI(GB,kB,A,I);C.layers=this.layers,this.add(C);const Q=new VI(GB,kB,A,I);Q.layers=this.layers,this.add(Q);const E=new VI(GB,kB,A,I);E.layers=this.layers,this.add(E);const i=new VI(GB,kB,A,I);i.layers=this.layers,this.add(i);const o=new VI(GB,kB,A,I);o.layers=this.layers,this.add(o);const e=new VI(GB,kB,A,I);e.layers=this.layers,this.add(e)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,Q,E,i,o]=I;for(const e of I)this.remove(e);if(A===Pg)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===LQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const e of I)this.add(e),e.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,E,i,o,e,t]=this.children,a=A.getRenderTarget(),D=A.getActiveCubeFace(),h=A.getActiveMipmapLevel(),n=A.xr.enabled;A.xr.enabled=!1;const w=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,Q),A.setRenderTarget(g,1,C),A.render(I,E),A.setRenderTarget(g,2,C),A.render(I,i),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,e),g.texture.generateMipmaps=w,A.setRenderTarget(g,5,C),A.render(I,t),A.setRenderTarget(a,D,h),A.xr.enabled=n,g.texture.needsPMREMUpdate=!0}}class ct extends LI{constructor(A,I,g,C,Q,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:$C,super(A,I,g,C,Q,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class mh extends JC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new ct(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Ig}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new dC(5,5,5),Q=new nC({name:"CubemapFromEquirect",uniforms:lB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:$I,blending:oC});Q.uniforms.tEquirect.value=I;const E=new vI(C,Q),i=I.minFilter;return I.minFilter===Zg&&(I.minFilter=Ig),new Hh(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}class Vi{constructor(A,I=1,g=1e3){this.isFog=!0,this.name="",this.color=new FA(A),this.near=I,this.far=g}clone(){return new Vi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fh extends SI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yg,this.environmentIntensity=1,this.environmentRotation=new Yg,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(I.object.environmentIntensity=this.environmentIntensity),I.object.environmentRotation=this.environmentRotation.toArray(),I}}class Th{constructor(A,I){this.isInterleavedBuffer=!0,this.array=A,this.stride=I,this.count=A!==void 0?A.length/I:0,this.usage=Ji,this.updateRanges=[],this.version=0,this.uuid=wg()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,I,g){A*=this.stride,g*=I.stride;for(let C=0,Q=this.stride;C<Q;C++)this.array[A+C]=I.array[g+C];return this}set(A,I=0){return this.array.set(A,I),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const I=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),g=new this.constructor(I,this.stride);return g.setUsage(this.usage),g}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const XI=new R;class Xi{constructor(A,I,g,C=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=I,this.offset=g,this.normalized=C}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let I=0,g=this.data.count;I<g;I++)XI.fromBufferAttribute(this,I),XI.applyMatrix4(A),this.setXYZ(I,XI.x,XI.y,XI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)XI.fromBufferAttribute(this,I),XI.applyNormalMatrix(A),this.setXYZ(I,XI.x,XI.y,XI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)XI.fromBufferAttribute(this,I),XI.transformDirection(A),this.setXYZ(I,XI.x,XI.y,XI.z);return this}getComponent(A,I){let g=this.array[A*this.data.stride+this.offset+I];return this.normalized&&(g=cg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=QI(g,this.array)),this.data.array[A*this.data.stride+this.offset+I]=g,this}setX(A,I){return this.normalized&&(I=QI(I,this.array)),this.data.array[A*this.data.stride+this.offset]=I,this}setY(A,I){return this.normalized&&(I=QI(I,this.array)),this.data.array[A*this.data.stride+this.offset+1]=I,this}setZ(A,I){return this.normalized&&(I=QI(I,this.array)),this.data.array[A*this.data.stride+this.offset+2]=I,this}setW(A,I){return this.normalized&&(I=QI(I,this.array)),this.data.array[A*this.data.stride+this.offset+3]=I,this}getX(A){let I=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(I=cg(I,this.array)),I}getY(A){let I=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(I=cg(I,this.array)),I}getZ(A){let I=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(I=cg(I,this.array)),I}getW(A){let I=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(I=cg(I,this.array)),I}setXY(A,I,g){return A=A*this.data.stride+this.offset,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this}setXYZ(A,I,g,C){return A=A*this.data.stride+this.offset,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array),C=QI(C,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A=A*this.data.stride+this.offset,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array),C=QI(C,this.array),Q=QI(Q,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this.data.array[A+3]=Q,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return new _I(new this.array.constructor(I),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new Xi(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:I,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lt=new R,Gt=new CI,kt=new CI,xh=new R,yt=new LA,zQ=new R,zi=new qg,Ut=new LA,$i=new sB;class bh extends vI{constructor(A,I){super(A,I),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ne,this.bindMatrix=new LA,this.bindMatrixInverse=new LA,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const A=this.geometry;this.boundingBox===null&&(this.boundingBox=new gg),this.boundingBox.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)this.getVertexPosition(g,zQ),this.boundingBox.expandByPoint(zQ)}computeBoundingSphere(){const A=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qg),this.boundingSphere.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)this.getVertexPosition(g,zQ),this.boundingSphere.expandByPoint(zQ)}copy(A,I){return super.copy(A,I),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}raycast(A,I){const g=this.material,C=this.matrixWorld;g!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(C),A.ray.intersectsSphere(zi)!==!1&&(Ut.copy(C).invert(),$i.copy(A.ray).applyMatrix4(Ut),!(this.boundingBox!==null&&$i.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(A,I,$i)))}getVertexPosition(A,I){return super.getVertexPosition(A,I),this.applyBoneTransform(A,I),I}bind(A,I){this.skeleton=A,I===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),I=this.matrixWorld),this.bindMatrix.copy(I),this.bindMatrixInverse.copy(I).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const A=new CI,I=this.geometry.attributes.skinWeight;for(let g=0,C=I.count;g<C;g++){A.fromBufferAttribute(I,g);const Q=1/A.manhattanLength();Q!==1/0?A.multiplyScalar(Q):A.set(1,0,0,0),I.setXYZW(g,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.bindMode===Ne?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ms?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(A,I){const g=this.skeleton,C=this.geometry;Gt.fromBufferAttribute(C.attributes.skinIndex,A),kt.fromBufferAttribute(C.attributes.skinWeight,A),lt.copy(I).applyMatrix4(this.bindMatrix),I.set(0,0,0);for(let Q=0;Q<4;Q++){const E=kt.getComponent(Q);if(E!==0){const i=Gt.getComponent(Q);yt.multiplyMatrices(g.bones[i].matrixWorld,g.boneInverses[i]),I.addScaledVector(xh.copy(lt).applyMatrix4(yt),E)}}return I.applyMatrix4(this.bindMatrixInverse)}}class Mt extends SI{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nt extends LI{constructor(A=null,I=1,g=1,C,Q,E,i,o,e=WI,t=WI,a,D){super(null,E,i,o,e,t,C,Q,a,D),this.isDataTexture=!0,this.image={data:A,width:I,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kt=new LA,Oh=new LA;class Ao{constructor(A=[],I=[]){this.uuid=wg(),this.bones=A.slice(0),this.boneInverses=I,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const A=this.bones,I=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),I.length===0)this.calculateInverses();else if(A.length!==I.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let g=0,C=this.bones.length;g<C;g++)this.boneInverses.push(new LA)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,I=this.bones.length;A<I;A++){const g=new LA;this.bones[A]&&g.copy(this.bones[A].matrixWorld).invert(),this.boneInverses.push(g)}}pose(){for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&g.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&(g.parent&&g.parent.isBone?(g.matrix.copy(g.parent.matrixWorld).invert(),g.matrix.multiply(g.matrixWorld)):g.matrix.copy(g.matrixWorld),g.matrix.decompose(g.position,g.quaternion,g.scale))}}update(){const A=this.bones,I=this.boneInverses,g=this.boneMatrices,C=this.boneTexture;for(let Q=0,E=A.length;Q<E;Q++){const i=A[Q]?A[Q].matrixWorld:Oh;Kt.multiplyMatrices(i,I[Q]),Kt.toArray(g,Q*16)}C!==null&&(C.needsUpdate=!0)}clone(){return new Ao(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=Math.ceil(A/4)*4,A=Math.max(A,4);const I=new Float32Array(A*A*4);I.set(this.boneMatrices);const g=new Nt(I,A,A,eg,ng);return g.needsUpdate=!0,this.boneMatrices=I,this.boneTexture=g,this}getBoneByName(A){for(let I=0,g=this.bones.length;I<g;I++){const C=this.bones[I];if(C.name===A)return C}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(A,I){this.uuid=A.uuid;for(let g=0,C=A.bones.length;g<C;g++){const Q=A.bones[g];let E=I[Q];E===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",Q),E=new Mt),this.bones.push(E),this.boneInverses.push(new LA().fromArray(A.boneInverses[g]))}return this.init(),this}toJSON(){const A={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;const I=this.bones,g=this.boneInverses;for(let C=0,Q=I.length;C<Q;C++){const E=I[C];A.bones.push(E.uuid);const i=g[C];A.boneInverses.push(i.toArray())}return A}}class Io extends _I{constructor(A,I,g,C=1){super(A,I,g),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=C}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}const yB=new LA,Jt=new LA,$Q=[],Ft=new gg,_h=new LA,zB=new vI,$B=new qg;class vh extends vI{constructor(A,I,g){super(A,I),this.isInstancedMesh=!0,this.instanceMatrix=new Io(new Float32Array(g*16),16),this.instanceColor=null,this.morphTexture=null,this.count=g,this.boundingBox=null,this.boundingSphere=null;for(let C=0;C<g;C++)this.setMatrixAt(C,_h)}computeBoundingBox(){const A=this.geometry,I=this.count;this.boundingBox===null&&(this.boundingBox=new gg),A.boundingBox===null&&A.computeBoundingBox(),this.boundingBox.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,yB),Ft.copy(A.boundingBox).applyMatrix4(yB),this.boundingBox.union(Ft)}computeBoundingSphere(){const A=this.geometry,I=this.count;this.boundingSphere===null&&(this.boundingSphere=new qg),A.boundingSphere===null&&A.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,yB),$B.copy(A.boundingSphere).applyMatrix4(yB),this.boundingSphere.union($B)}copy(A,I){return super.copy(A,I),this.instanceMatrix.copy(A.instanceMatrix),A.morphTexture!==null&&(this.morphTexture=A.morphTexture.clone()),A.instanceColor!==null&&(this.instanceColor=A.instanceColor.clone()),this.count=A.count,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}getColorAt(A,I){I.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,I){I.fromArray(this.instanceMatrix.array,A*16)}getMorphAt(A,I){const g=I.morphTargetInfluences,C=this.morphTexture.source.data.data,Q=g.length+1,E=A*Q+1;for(let i=0;i<g.length;i++)g[i]=C[E+i]}raycast(A,I){const g=this.matrixWorld,C=this.count;if(zB.geometry=this.geometry,zB.material=this.material,zB.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$B.copy(this.boundingSphere),$B.applyMatrix4(g),A.ray.intersectsSphere($B)!==!1))for(let Q=0;Q<C;Q++){this.getMatrixAt(Q,yB),Jt.multiplyMatrices(g,yB),zB.matrixWorld=Jt,zB.raycast(A,$Q);for(let E=0,i=$Q.length;E<i;E++){const o=$Q[E];o.instanceId=Q,o.object=this,I.push(o)}$Q.length=0}}setColorAt(A,I){this.instanceColor===null&&(this.instanceColor=new Io(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),I.toArray(this.instanceColor.array,A*3)}setMatrixAt(A,I){I.toArray(this.instanceMatrix.array,A*16)}setMorphAt(A,I){const g=I.morphTargetInfluences,C=g.length+1;this.morphTexture===null&&(this.morphTexture=new Nt(new Float32Array(C*this.count),C,this.count,VE,ng));const Q=this.morphTexture.source.data.data;let E=0;for(let e=0;e<g.length;e++)E+=g[e];const i=this.geometry.morphTargetsRelative?1:1-E,o=C*A;Q[o]=i,Q.set(g,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const go=new R,Zh=new R,Wh=new fA;class cC{constructor(A=new R(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=go.subVectors(g,I).cross(Zh.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(go),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Wh.getNormalMatrix(A),C=this.coplanarPoint(go).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qC=new qg,AE=new R;class Co{constructor(A=new cC,I=new cC,g=new cC,C=new cC,Q=new cC,E=new cC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=Pg){const g=this.planes,C=A.elements,Q=C[0],E=C[1],i=C[2],o=C[3],e=C[4],t=C[5],a=C[6],D=C[7],h=C[8],n=C[9],w=C[10],S=C[11],r=C[12],M=C[13],U=C[14],k=C[15];if(g[0].setComponents(o-Q,D-e,S-h,k-r).normalize(),g[1].setComponents(o+Q,D+e,S+h,k+r).normalize(),g[2].setComponents(o+E,D+t,S+n,k+M).normalize(),g[3].setComponents(o-E,D-t,S-n,k-M).normalize(),g[4].setComponents(o-i,D-a,S-w,k-U).normalize(),I===Pg)g[5].setComponents(o+i,D+a,S+w,k+U).normalize();else if(I===LQ)g[5].setComponents(i,a,w,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),qC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),qC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(qC)}intersectsSprite(A){return qC.center.set(0,0,0),qC.radius=.7071067811865476,qC.applyMatrix4(A.matrixWorld),this.intersectsSphere(qC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(AE.x=C.normal.x>0?A.max.x:A.min.x,AE.y=C.normal.y>0?A.max.y:A.min.y,AE.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(AE)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rt extends Lg{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new FA(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const IE=new R,gE=new R,pt=new LA,AQ=new sB,CE=new qg,Bo=new R,dt=new R;class Qo extends SI{constructor(A=new Ug,I=new Rt){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,Q=I.count;C<Q;C++)IE.fromBufferAttribute(I,C-1),gE.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=IE.distanceTo(gE);A.setAttribute("lineDistance",new tg(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),CE.copy(g.boundingSphere),CE.applyMatrix4(C),CE.radius+=Q,A.ray.intersectsSphere(CE)===!1)return;pt.copy(C).invert(),AQ.copy(A.ray).applyMatrix4(pt);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=this.isLineSegments?2:1,t=g.index,a=g.attributes.position;if(t!==null){const D=Math.max(0,E.start),h=Math.min(t.count,E.start+E.count);for(let n=D,w=h-1;n<w;n+=e){const S=t.getX(n),r=t.getX(n+1),M=BE(this,A,AQ,o,S,r);M&&I.push(M)}if(this.isLineLoop){const n=t.getX(h-1),w=t.getX(D),S=BE(this,A,AQ,o,n,w);S&&I.push(S)}}else{const D=Math.max(0,E.start),h=Math.min(a.count,E.start+E.count);for(let n=D,w=h-1;n<w;n+=e){const S=BE(this,A,AQ,o,n,n+1);S&&I.push(S)}if(this.isLineLoop){const n=BE(this,A,AQ,o,h-1,D);n&&I.push(n)}}}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}}function BE(B,A,I,g,C,Q){const E=B.geometry.attributes.position;if(IE.fromBufferAttribute(E,C),gE.fromBufferAttribute(E,Q),I.distanceSqToSegment(IE,gE,Bo,dt)>g)return;Bo.applyMatrix4(B.matrixWorld);const i=A.ray.origin.distanceTo(Bo);if(!(i<A.near||i>A.far))return{distance:i,point:dt.clone().applyMatrix4(B.matrixWorld),index:C,face:null,faceIndex:null,barycoord:null,object:B}}const qt=new R,Yt=new R;class Ph extends Qo{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,Q=I.count;C<Q;C+=2)qt.fromBufferAttribute(I,C),Yt.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+qt.distanceTo(Yt);A.setAttribute("lineDistance",new tg(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jh extends Qo{constructor(A,I){super(A,I),this.isLineLoop=!0,this.type="LineLoop"}}class Lt extends Lg{constructor(A){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new FA(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}const ut=new LA,Eo=new sB,QE=new qg,EE=new R;class Vh extends SI{constructor(A=new Ug,I=new Lt){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Points.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),QE.copy(g.boundingSphere),QE.applyMatrix4(C),QE.radius+=Q,A.ray.intersectsSphere(QE)===!1)return;ut.copy(C).invert(),Eo.copy(A.ray).applyMatrix4(ut);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=g.index,t=g.attributes.position;if(e!==null){const a=Math.max(0,E.start),D=Math.min(e.count,E.start+E.count);for(let h=a,n=D;h<n;h++){const w=e.getX(h);EE.fromBufferAttribute(t,w),Ht(EE,w,o,C,A,I,this)}}else{const a=Math.max(0,E.start),D=Math.min(t.count,E.start+E.count);for(let h=a,n=D;h<n;h++)EE.fromBufferAttribute(t,h),Ht(EE,h,o,C,A,I,this)}}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}}function Ht(B,A,I,g,C,Q,E){const i=Eo.distanceSqToPoint(B);if(i<I){const o=new R;Eo.closestPointToPoint(B,o),o.applyMatrix4(g);const e=C.ray.origin.distanceTo(o);if(e<C.near||e>C.far)return;Q.push({distance:e,distanceToRay:Math.sqrt(i),point:o,index:A,face:null,faceIndex:null,barycoord:null,object:E})}}class YC extends SI{constructor(){super(),this.isGroup=!0,this.type="Group"}}class mt extends LI{constructor(A,I,g,C,Q,E,i,o,e,t=CB){if(t!==CB&&t!==BB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===CB&&(g=NC),g===void 0&&t===BB&&(g=gB),super(null,C,Q,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:WI,this.minFilter=o!==void 0?o:WI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}class io extends Ug{constructor(A=[],I=[],g=1,C=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:A,indices:I,radius:g,detail:C};const Q=[],E=[];i(C),e(g),t(),this.setAttribute("position",new tg(Q,3)),this.setAttribute("normal",new tg(Q.slice(),3)),this.setAttribute("uv",new tg(E,2)),C===0?this.computeVertexNormals():this.normalizeNormals();function i(M){const U=new R,k=new R,d=new R;for(let F=0;F<I.length;F+=3)h(I[F+0],U),h(I[F+1],k),h(I[F+2],d),o(U,k,d,M)}function o(M,U,k,d){const F=d+1,K=[];for(let q=0;q<=F;q++){K[q]=[];const y=M.clone().lerp(k,q/F),G=U.clone().lerp(k,q/F),Y=F-q;for(let O=0;O<=Y;O++)O===0&&q===F?K[q][O]=y:K[q][O]=y.clone().lerp(G,O/Y)}for(let q=0;q<F;q++)for(let y=0;y<2*(F-q)-1;y++){const G=Math.floor(y/2);y%2===0?(D(K[q][G+1]),D(K[q+1][G]),D(K[q][G])):(D(K[q][G+1]),D(K[q+1][G+1]),D(K[q+1][G]))}}function e(M){const U=new R;for(let k=0;k<Q.length;k+=3)U.x=Q[k+0],U.y=Q[k+1],U.z=Q[k+2],U.normalize().multiplyScalar(M),Q[k+0]=U.x,Q[k+1]=U.y,Q[k+2]=U.z}function t(){const M=new R;for(let U=0;U<Q.length;U+=3){M.x=Q[U+0],M.y=Q[U+1],M.z=Q[U+2];const k=S(M)/2/Math.PI+.5,d=r(M)/Math.PI+.5;E.push(k,1-d)}n(),a()}function a(){for(let M=0;M<E.length;M+=6){const U=E[M+0],k=E[M+2],d=E[M+4],F=Math.max(U,k,d),K=Math.min(U,k,d);F>.9&&K<.1&&(U<.2&&(E[M+0]+=1),k<.2&&(E[M+2]+=1),d<.2&&(E[M+4]+=1))}}function D(M){Q.push(M.x,M.y,M.z)}function h(M,U){const k=M*3;U.x=A[k+0],U.y=A[k+1],U.z=A[k+2]}function n(){const M=new R,U=new R,k=new R,d=new R,F=new JA,K=new JA,q=new JA;for(let y=0,G=0;y<Q.length;y+=9,G+=6){M.set(Q[y+0],Q[y+1],Q[y+2]),U.set(Q[y+3],Q[y+4],Q[y+5]),k.set(Q[y+6],Q[y+7],Q[y+8]),F.set(E[G+0],E[G+1]),K.set(E[G+2],E[G+3]),q.set(E[G+4],E[G+5]),d.copy(M).add(U).add(k).divideScalar(3);const Y=S(d);w(F,G+0,M,Y),w(K,G+2,U,Y),w(q,G+4,k,Y)}}function w(M,U,k,d){d<0&&M.x===1&&(E[U]=M.x-1),k.x===0&&k.z===0&&(E[U]=d/2/Math.PI+.5)}function S(M){return Math.atan2(M.z,-M.x)}function r(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new io(A.vertices,A.indices,A.radius,A.details)}}class oo extends io{constructor(A=1,I=0){const g=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],C=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(g,C,A,I),this.type="OctahedronGeometry",this.parameters={radius:A,detail:I}}static fromJSON(A){return new oo(A.radius,A.detail)}}class iE extends Ug{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,D=I/o,h=[],n=[],w=[],S=[];for(let r=0;r<t;r++){const M=r*D-E;for(let U=0;U<e;U++){const k=U*a-Q;n.push(k,-M,0),w.push(0,0,1),S.push(U/i),S.push(1-r/o)}}for(let r=0;r<o;r++)for(let M=0;M<i;M++){const U=M+e*r,k=M+e*(r+1),d=M+1+e*(r+1),F=M+1+e*r;h.push(U,k,F),h.push(k,d,F)}this.setIndex(h),this.setAttribute("position",new tg(n,3)),this.setAttribute("normal",new tg(w,3)),this.setAttribute("uv",new tg(S,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new iE(A.width,A.height,A.widthSegments,A.heightSegments)}}class eo extends Lg{constructor(A){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new FA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new FA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=be,this.normalScale=new JA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yg,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class Hg extends eo{constructor(A){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new JA(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return OA(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(I){this.ior=(1+.4*I)/(1-.4*I)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new FA(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new FA(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new FA(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(A)}get anisotropy(){return this._anisotropy}set anisotropy(A){this._anisotropy>0!=A>0&&this.version++,this._anisotropy=A}get clearcoat(){return this._clearcoat}set clearcoat(A){this._clearcoat>0!=A>0&&this.version++,this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){this._iridescence>0!=A>0&&this.version++,this._iridescence=A}get dispersion(){return this._dispersion}set dispersion(A){this._dispersion>0!=A>0&&this.version++,this._dispersion=A}get sheen(){return this._sheen}set sheen(A){this._sheen>0!=A>0&&this.version++,this._sheen=A}get transmission(){return this._transmission}set transmission(A){this._transmission>0!=A>0&&this.version++,this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=A.anisotropy,this.anisotropyRotation=A.anisotropyRotation,this.anisotropyMap=A.anisotropyMap,this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.dispersion=A.dispersion,this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}class Xh extends Lg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class zh extends Lg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}function oE(B,A,I){return!B||!I&&B.constructor===A?B:typeof A.BYTES_PER_ELEMENT=="number"?new A(B):Array.prototype.slice.call(B)}function $h(B){return ArrayBuffer.isView(B)&&!(B instanceof DataView)}function Ar(B){function A(C,Q){return B[C]-B[Q]}const I=B.length,g=new Array(I);for(let C=0;C!==I;++C)g[C]=C;return g.sort(A),g}function ft(B,A,I){const g=B.length,C=new B.constructor(g);for(let Q=0,E=0;E!==g;++Q){const i=I[Q]*A;for(let o=0;o!==A;++o)C[E++]=B[i+o]}return C}function Tt(B,A,I,g){let C=1,Q=B[0];for(;Q!==void 0&&Q[g]===void 0;)Q=B[C++];if(Q===void 0)return;let E=Q[g];if(E!==void 0)if(Array.isArray(E))do E=Q[g],E!==void 0&&(A.push(Q.time),I.push.apply(I,E)),Q=B[C++];while(Q!==void 0);else if(E.toArray!==void 0)do E=Q[g],E!==void 0&&(A.push(Q.time),E.toArray(I,I.length)),Q=B[C++];while(Q!==void 0);else do E=Q[g],E!==void 0&&(A.push(Q.time),I.push(E)),Q=B[C++];while(Q!==void 0)}class IQ{constructor(A,I,g,C){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=C!==void 0?C:new I.constructor(g),this.sampleValues=I,this.valueSize=g,this.settings=null,this.DefaultSettings_={}}evaluate(A){const I=this.parameterPositions;let g=this._cachedIndex,C=I[g],Q=I[g-1];g:{A:{let E;I:{C:if(!(A<C)){for(let i=g+2;;){if(C===void 0){if(A<Q)break C;return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}if(g===i)break;if(Q=C,C=I[++g],A<C)break A}E=I.length;break I}if(!(A>=Q)){const i=I[1];A<i&&(g=2,Q=i);for(let o=g-2;;){if(Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(g===o)break;if(C=Q,Q=I[--g-1],A>=Q)break A}E=g,g=0;break I}break g}for(;g<E;){const i=g+E>>>1;A<I[i]?E=i:g=i+1}if(C=I[g],Q=I[g-1],Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===void 0)return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}this._cachedIndex=g,this.intervalChanged_(g,Q,C)}return this.interpolate_(g,Q,A,C)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,Q=A*C;for(let E=0;E!==C;++E)I[E]=g[Q+E];return I}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ir extends IQ{constructor(A,I,g,C){super(A,I,g,C),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:me,endingEnd:me}}intervalChanged_(A,I,g){const C=this.parameterPositions;let Q=A-2,E=A+1,i=C[Q],o=C[E];if(i===void 0)switch(this.getSettings_().endingStart){case fe:Q=A,i=2*I-g;break;case Te:Q=C.length-2,i=I+C[Q]-C[Q+1];break;default:Q=A,i=g}if(o===void 0)switch(this.getSettings_().endingEnd){case fe:E=A,o=2*g-I;break;case Te:E=1,o=g+C[1]-C[0];break;default:E=A-1,o=I}const e=(g-I)*.5,t=this.valueSize;this._weightPrev=e/(I-i),this._weightNext=e/(o-g),this._offsetPrev=Q*t,this._offsetNext=E*t}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=this._offsetPrev,a=this._offsetNext,D=this._weightPrev,h=this._weightNext,n=(g-I)/(C-I),w=n*n,S=w*n,r=-D*S+2*D*w-D*n,M=(1+D)*S+(-1.5-2*D)*w+(-.5+D)*n+1,U=(-1-h)*S+(1.5+h)*w+.5*n,k=h*S-h*w;for(let d=0;d!==i;++d)Q[d]=r*E[t+d]+M*E[e+d]+U*E[o+d]+k*E[a+d];return Q}}class gr extends IQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=(g-I)/(C-I),a=1-t;for(let D=0;D!==i;++D)Q[D]=E[e+D]*a+E[o+D]*t;return Q}}class Cr extends IQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A){return this.copySampleValue_(A-1)}}class mg{constructor(A,I,g,C){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(I===void 0||I.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=oE(I,this.TimeBufferType),this.values=oE(g,this.ValueBufferType),this.setInterpolation(C||this.DefaultInterpolation)}static toJSON(A){const I=A.constructor;let g;if(I.toJSON!==this.toJSON)g=I.toJSON(A);else{g={name:A.name,times:oE(A.times,Array),values:oE(A.values,Array)};const C=A.getInterpolation();C!==A.DefaultInterpolation&&(g.interpolation=C)}return g.type=A.ValueTypeName,g}InterpolantFactoryMethodDiscrete(A){return new Cr(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new gr(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new Ir(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let I;switch(A){case OB:I=this.InterpolantFactoryMethodDiscrete;break;case _B:I=this.InterpolantFactoryMethodLinear;break;case Ni:I=this.InterpolantFactoryMethodSmooth;break}if(I===void 0){const g="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(g);return console.warn("THREE.KeyframeTrack:",g),this}return this.createInterpolant=I,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return OB;case this.InterpolantFactoryMethodLinear:return _B;case this.InterpolantFactoryMethodSmooth:return Ni}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]+=A}return this}scale(A){if(A!==1){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]*=A}return this}trim(A,I){const g=this.times,C=g.length;let Q=0,E=C-1;for(;Q!==C&&g[Q]<A;)++Q;for(;E!==-1&&g[E]>I;)--E;if(++E,Q!==0||E!==C){Q>=E&&(E=Math.max(E,1),Q=E-1);const i=this.getValueSize();this.times=g.slice(Q,E),this.values=this.values.slice(Q*i,E*i)}return this}validate(){let A=!0;const I=this.getValueSize();I-Math.floor(I)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1);const g=this.times,C=this.values,Q=g.length;Q===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1);let E=null;for(let i=0;i!==Q;i++){const o=g[i];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,o),A=!1;break}if(E!==null&&E>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,o,E),A=!1;break}E=o}if(C!==void 0&&$h(C))for(let i=0,o=C.length;i!==o;++i){const e=C[i];if(isNaN(e)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,e),A=!1;break}}return A}optimize(){const A=this.times.slice(),I=this.values.slice(),g=this.getValueSize(),C=this.getInterpolation()===Ni,Q=A.length-1;let E=1;for(let i=1;i<Q;++i){let o=!1;const e=A[i],t=A[i+1];if(e!==t&&(i!==1||e!==A[0]))if(C)o=!0;else{const a=i*g,D=a-g,h=a+g;for(let n=0;n!==g;++n){const w=I[a+n];if(w!==I[D+n]||w!==I[h+n]){o=!0;break}}}if(o){if(i!==E){A[E]=A[i];const a=i*g,D=E*g;for(let h=0;h!==g;++h)I[D+h]=I[a+h]}++E}}if(Q>0){A[E]=A[Q];for(let i=Q*g,o=E*g,e=0;e!==g;++e)I[o+e]=I[i+e];++E}return E!==A.length?(this.times=A.slice(0,E),this.values=I.slice(0,E*g)):(this.times=A,this.values=I),this}clone(){const A=this.times.slice(),I=this.values.slice(),g=this.constructor,C=new g(this.name,A,I);return C.createInterpolant=this.createInterpolant,C}}mg.prototype.TimeBufferType=Float32Array,mg.prototype.ValueBufferType=Float32Array,mg.prototype.DefaultInterpolation=_B;class UB extends mg{constructor(A,I,g){super(A,I,g)}}UB.prototype.ValueTypeName="bool",UB.prototype.ValueBufferType=Array,UB.prototype.DefaultInterpolation=OB,UB.prototype.InterpolantFactoryMethodLinear=void 0,UB.prototype.InterpolantFactoryMethodSmooth=void 0;class xt extends mg{}xt.prototype.ValueTypeName="color";class MB extends mg{}MB.prototype.ValueTypeName="number";class Br extends IQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=(g-I)/(C-I);let e=A*i;for(let t=e+i;e!==t;e+=4)dg.slerpFlat(Q,0,E,e-i,E,e,o);return Q}}class NB extends mg{InterpolantFactoryMethodLinear(A){return new Br(this.times,this.values,this.getValueSize(),A)}}NB.prototype.ValueTypeName="quaternion",NB.prototype.InterpolantFactoryMethodSmooth=void 0;class KB extends mg{constructor(A,I,g){super(A,I,g)}}KB.prototype.ValueTypeName="string",KB.prototype.ValueBufferType=Array,KB.prototype.DefaultInterpolation=OB,KB.prototype.InterpolantFactoryMethodLinear=void 0,KB.prototype.InterpolantFactoryMethodSmooth=void 0;class JB extends mg{}JB.prototype.ValueTypeName="vector";class Qr{constructor(A="",I=-1,g=[],C=fs){this.name=A,this.tracks=g,this.duration=I,this.blendMode=C,this.uuid=wg(),this.duration<0&&this.resetDuration()}static parse(A){const I=[],g=A.tracks,C=1/(A.fps||1);for(let E=0,i=g.length;E!==i;++E)I.push(ir(g[E]).scale(C));const Q=new this(A.name,A.duration,I,A.blendMode);return Q.uuid=A.uuid,Q}static toJSON(A){const I=[],g=A.tracks,C={name:A.name,duration:A.duration,tracks:I,uuid:A.uuid,blendMode:A.blendMode};for(let Q=0,E=g.length;Q!==E;++Q)I.push(mg.toJSON(g[Q]));return C}static CreateFromMorphTargetSequence(A,I,g,C){const Q=I.length,E=[];for(let i=0;i<Q;i++){let o=[],e=[];o.push((i+Q-1)%Q,i,(i+1)%Q),e.push(0,1,0);const t=Ar(o);o=ft(o,1,t),e=ft(e,1,t),!C&&o[0]===0&&(o.push(Q),e.push(e[0])),E.push(new MB(".morphTargetInfluences["+I[i].name+"]",o,e).scale(1/g))}return new this(A,-1,E)}static findByName(A,I){let g=A;if(!Array.isArray(A)){const C=A;g=C.geometry&&C.geometry.animations||C.animations}for(let C=0;C<g.length;C++)if(g[C].name===I)return g[C];return null}static CreateClipsFromMorphTargetSequences(A,I,g){const C={},Q=/^([\w-]*?)([\d]+)$/;for(let i=0,o=A.length;i<o;i++){const e=A[i],t=e.name.match(Q);if(t&&t.length>1){const a=t[1];let D=C[a];D||(C[a]=D=[]),D.push(e)}}const E=[];for(const i in C)E.push(this.CreateFromMorphTargetSequence(i,C[i],I,g));return E}static parseAnimation(A,I){if(!A)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const g=function(t,a,D,h,n){if(D.length!==0){const w=[],S=[];Tt(D,w,S,h),w.length!==0&&n.push(new t(a,w,S))}},C=[],Q=A.name||"default",E=A.fps||30,i=A.blendMode;let o=A.length||-1;const e=A.hierarchy||[];for(let t=0;t<e.length;t++){const a=e[t].keys;if(!(!a||a.length===0))if(a[0].morphTargets){const D={};let h;for(h=0;h<a.length;h++)if(a[h].morphTargets)for(let n=0;n<a[h].morphTargets.length;n++)D[a[h].morphTargets[n]]=-1;for(const n in D){const w=[],S=[];for(let r=0;r!==a[h].morphTargets.length;++r){const M=a[h];w.push(M.time),S.push(M.morphTarget===n?1:0)}C.push(new MB(".morphTargetInfluence["+n+"]",w,S))}o=D.length*E}else{const D=".bones["+I[t].name+"]";g(JB,D+".position",a,"pos",C),g(NB,D+".quaternion",a,"rot",C),g(JB,D+".scale",a,"scl",C)}}return C.length===0?null:new this(Q,o,C,i)}resetDuration(){const A=this.tracks;let I=0;for(let g=0,C=A.length;g!==C;++g){const Q=this.tracks[g];I=Math.max(I,Q.times[Q.times.length-1])}return this.duration=I,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let I=0;I<this.tracks.length;I++)A=A&&this.tracks[I].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){const A=[];for(let I=0;I<this.tracks.length;I++)A.push(this.tracks[I].clone());return new this.constructor(this.name,this.duration,A,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Er(B){switch(B.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return MB;case"vector":case"vector2":case"vector3":case"vector4":return JB;case"color":return xt;case"quaternion":return NB;case"bool":case"boolean":return UB;case"string":return KB}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+B)}function ir(B){if(B.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const A=Er(B.type);if(B.times===void 0){const I=[],g=[];Tt(B.keys,I,g,"value"),B.times=I,B.values=g}return A.parse!==void 0?A.parse(B):new A(B.name,B.times,B.values,B.interpolation)}const lC={enabled:!1,files:{},add:function(B,A){this.enabled!==!1&&(this.files[B]=A)},get:function(B){if(this.enabled!==!1)return this.files[B]},remove:function(B){delete this.files[B]},clear:function(){this.files={}}};class or{constructor(A,I,g){const C=this;let Q=!1,E=0,i=0,o;const e=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(t){i++,Q===!1&&C.onStart!==void 0&&C.onStart(t,E,i),Q=!0},this.itemEnd=function(t){E++,C.onProgress!==void 0&&C.onProgress(t,E,i),E===i&&(Q=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(t){C.onError!==void 0&&C.onError(t)},this.resolveURL=function(t){return o?o(t):t},this.setURLModifier=function(t){return o=t,this},this.addHandler=function(t,a){return e.push(t,a),this},this.removeHandler=function(t){const a=e.indexOf(t);return a!==-1&&e.splice(a,2),this},this.getHandler=function(t){for(let a=0,D=e.length;a<D;a+=2){const h=e[a],n=e[a+1];if(h.global&&(h.lastIndex=0),h.test(t))return n}return null}}}const er=new or;class FB{constructor(A){this.manager=A!==void 0?A:er,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,Q){g.load(A,C,I,Q)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}FB.DEFAULT_MATERIAL_NAME="__DEFAULT";const IC={};class tr extends Error{constructor(A,I){super(A),this.response=I}}class bt extends FB{constructor(A){super(A)}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=lC.get(A);if(Q!==void 0)return this.manager.itemStart(A),setTimeout(()=>{I&&I(Q),this.manager.itemEnd(A)},0),Q;if(IC[A]!==void 0){IC[A].push({onLoad:I,onProgress:g,onError:C});return}IC[A]=[],IC[A].push({onLoad:I,onProgress:g,onError:C});const E=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,o=this.responseType;fetch(E).then(e=>{if(e.status===200||e.status===0){if(e.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||e.body===void 0||e.body.getReader===void 0)return e;const t=IC[A],a=e.body.getReader(),D=e.headers.get("X-File-Size")||e.headers.get("Content-Length"),h=D?parseInt(D):0,n=h!==0;let w=0;const S=new ReadableStream({start(r){M();function M(){a.read().then(({done:U,value:k})=>{if(U)r.close();else{w+=k.byteLength;const d=new ProgressEvent("progress",{lengthComputable:n,loaded:w,total:h});for(let F=0,K=t.length;F<K;F++){const q=t[F];q.onProgress&&q.onProgress(d)}r.enqueue(k),M()}},U=>{r.error(U)})}}});return new Response(S)}else throw new tr(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(t=>new DOMParser().parseFromString(t,i));case"json":return e.json();default:if(i===void 0)return e.text();{const t=/charset="?([^;"\s]*)"?/i.exec(i),a=t&&t[1]?t[1].toLowerCase():void 0,D=new TextDecoder(a);return e.arrayBuffer().then(h=>D.decode(h))}}}).then(e=>{lC.add(A,e);const t=IC[A];delete IC[A];for(let a=0,D=t.length;a<D;a++){const h=t[a];h.onLoad&&h.onLoad(e)}}).catch(e=>{const t=IC[A];if(t===void 0)throw this.manager.itemError(A),e;delete IC[A];for(let a=0,D=t.length;a<D;a++){const h=t[a];h.onError&&h.onError(e)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class ar extends FB{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=lC.get(A);if(E!==void 0)return Q.manager.itemStart(A),setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E;const i=WB("img");function o(){t(),lC.add(A,this),I&&I(this),Q.manager.itemEnd(A)}function e(a){t(),C&&C(a),Q.manager.itemError(A),Q.manager.itemEnd(A)}function t(){i.removeEventListener("load",o,!1),i.removeEventListener("error",e,!1)}return i.addEventListener("load",o,!1),i.addEventListener("error",e,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),Q.manager.itemStart(A),i.src=A,i}}class Dr extends FB{constructor(A){super(A)}load(A,I,g,C){const Q=new LI,E=new ar(this.manager);return E.setCrossOrigin(this.crossOrigin),E.setPath(this.path),E.load(A,function(i){Q.image=i,Q.needsUpdate=!0,I!==void 0&&I(Q)},g,C),Q}}class gQ extends SI{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new FA(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(I.object.target=this.target.uuid),I}}class sr extends gQ{constructor(A,I,g){super(A,g),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(SI.DEFAULT_UP),this.updateMatrix(),this.groundColor=new FA(I)}copy(A,I){return super.copy(A,I),this.groundColor.copy(A.groundColor),this}}const to=new LA,Ot=new R,_t=new R;class ao{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new JA(512,512),this.map=null,this.mapPass=null,this.matrix=new LA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new JA(1,1),this._viewportCount=1,this._viewports=[new CI(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;Ot.setFromMatrixPosition(A.matrixWorld),I.position.copy(Ot),_t.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(_t),I.updateMatrixWorld(),to.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(to)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.intensity!==1&&(A.intensity=this.intensity),this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class hr extends ao{constructor(){super(new VI(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const I=this.camera,g=EB*2*A.angle*this.focus,C=this.mapSize.width/this.mapSize.height,Q=A.distance||I.far;(g!==I.fov||C!==I.aspect||Q!==I.far)&&(I.fov=g,I.aspect=C,I.far=Q,I.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class rr extends gQ{constructor(A,I,g=0,C=Math.PI/3,Q=0,E=2){super(A,I),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(SI.DEFAULT_UP),this.updateMatrix(),this.target=new SI,this.distance=g,this.angle=C,this.penumbra=Q,this.decay=E,this.map=null,this.shadow=new hr}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const vt=new LA,CQ=new R,Do=new R;class Sr extends ao{constructor(){super(new VI(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new JA(4,2),this._viewportCount=6,this._viewports=[new CI(2,1,1,1),new CI(0,1,1,1),new CI(3,1,1,1),new CI(1,1,1,1),new CI(3,0,1,1),new CI(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(A,I=0){const g=this.camera,C=this.matrix,Q=A.distance||g.far;Q!==g.far&&(g.far=Q,g.updateProjectionMatrix()),CQ.setFromMatrixPosition(A.matrixWorld),g.position.copy(CQ),Do.copy(g.position),Do.add(this._cubeDirections[I]),g.up.copy(this._cubeUps[I]),g.lookAt(Do),g.updateMatrixWorld(),C.makeTranslation(-CQ.x,-CQ.y,-CQ.z),vt.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vt)}}class nr extends gQ{constructor(A,I,g=0,C=2){super(A,I),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=C,this.shadow=new Sr}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class so extends St{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=e*this.view.offsetX,E=Q+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}class wr extends ao{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zt extends gQ{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(SI.DEFAULT_UP),this.updateMatrix(),this.target=new SI,this.shadow=new wr}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class cr extends gQ{constructor(A,I){super(A,I),this.isAmbientLight=!0,this.type="AmbientLight"}}class BQ{static decodeText(A){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(A);let I="";for(let g=0,C=A.length;g<C;g++)I+=String.fromCharCode(A[g]);try{return decodeURIComponent(escape(I))}catch{return I}}static extractUrlBase(A){const I=A.lastIndexOf("/");return I===-1?"./":A.slice(0,I+1)}static resolveURL(A,I){return typeof A!="string"||A===""?"":(/^https?:\/\//i.test(I)&&/^\//.test(A)&&(I=I.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(A)||/^data:.*,.*$/i.test(A)||/^blob:.*$/i.test(A)?A:I+A)}}class lr extends FB{constructor(A){super(A),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(A){return this.options=A,this}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=lC.get(A);if(E!==void 0){if(Q.manager.itemStart(A),E.then){E.then(e=>{I&&I(e),Q.manager.itemEnd(A)}).catch(e=>{C&&C(e)});return}return setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E}const i={};i.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",i.headers=this.requestHeader;const o=fetch(A,i).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(Q.options,{colorSpaceConversion:"none"}))}).then(function(e){return lC.add(A,e),I&&I(e),Q.manager.itemEnd(A),e}).catch(function(e){C&&C(e),lC.remove(A),Q.manager.itemError(A),Q.manager.itemEnd(A)});lC.add(A,o),Q.manager.itemStart(A)}}class Gr extends VI{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}const ho="\\[\\]\\.:\\/",kr=new RegExp("["+ho+"]","g"),ro="[^"+ho+"]",yr="[^"+ho.replace("\\.","")+"]",Ur=/((?:WC+[\/:])*)/.source.replace("WC",ro),Mr=/(WCOD+)?/.source.replace("WCOD",yr),Nr=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ro),Kr=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ro),Jr=new RegExp("^"+Ur+Mr+Nr+Kr+"$"),Fr=["material","materials","bones","map"];class Rr{constructor(A,I,g){const C=g||EI.parseTrackName(I);this._targetGroup=A,this._bindings=A.subscribe_(I,C)}getValue(A,I){this.bind();const g=this._targetGroup.nCachedObjects_,C=this._bindings[g];C!==void 0&&C.getValue(A,I)}setValue(A,I){const g=this._bindings;for(let C=this._targetGroup.nCachedObjects_,Q=g.length;C!==Q;++C)g[C].setValue(A,I)}bind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].bind()}unbind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].unbind()}}class EI{constructor(A,I,g){this.path=I,this.parsedPath=g||EI.parseTrackName(I),this.node=EI.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,I,g){return A&&A.isAnimationObjectGroup?new EI.Composite(A,I,g):new EI(A,I,g)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(kr,"")}static parseTrackName(A){const I=Jr.exec(A);if(I===null)throw new Error("PropertyBinding: Cannot parse trackName: "+A);const g={nodeName:I[2],objectName:I[3],objectIndex:I[4],propertyName:I[5],propertyIndex:I[6]},C=g.nodeName&&g.nodeName.lastIndexOf(".");if(C!==void 0&&C!==-1){const Q=g.nodeName.substring(C+1);Fr.indexOf(Q)!==-1&&(g.nodeName=g.nodeName.substring(0,C),g.objectName=Q)}if(g.propertyName===null||g.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+A);return g}static findNode(A,I){if(I===void 0||I===""||I==="."||I===-1||I===A.name||I===A.uuid)return A;if(A.skeleton){const g=A.skeleton.getBoneByName(I);if(g!==void 0)return g}if(A.children){const g=function(Q){for(let E=0;E<Q.length;E++){const i=Q[E];if(i.name===I||i.uuid===I)return i;const o=g(i.children);if(o)return o}return null},C=g(A.children);if(C)return C}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,I){A[I]=this.targetObject[this.propertyName]}_getValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)A[I++]=g[C]}_getValue_arrayElement(A,I){A[I]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,I){this.resolvedProperty.toArray(A,I)}_setValue_direct(A,I){this.targetObject[this.propertyName]=A[I]}_setValue_direct_setNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++]}_setValue_array_setNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,I){this.resolvedProperty[this.propertyIndex]=A[I]}_setValue_arrayElement_setNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,I){this.resolvedProperty.fromArray(A,I)}_setValue_fromArray_setNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,I){this.bind(),this.getValue(A,I)}_setValue_unbound(A,I){this.bind(),this.setValue(A,I)}bind(){let A=this.node;const I=this.parsedPath,g=I.objectName,C=I.propertyName;let Q=I.propertyIndex;if(A||(A=EI.findNode(this.rootNode,I.nodeName),this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(g){let e=I.objectIndex;switch(g){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let t=0;t<A.length;t++)if(A[t].name===e){e=t;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[g]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[g]}if(e!==void 0){if(A[e]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[e]}}const E=A[C];if(E===void 0){const e=I.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+e+"."+C+" but it wasn't found.",A);return}let i=this.Versioning.None;this.targetObject=A,A.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:A.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(Q!==void 0){if(C==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[Q]!==void 0&&(Q=A.morphTargetDictionary[Q])}o=this.BindingType.ArrayElement,this.resolvedProperty=E,this.propertyIndex=Q}else E.fromArray!==void 0&&E.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=E):Array.isArray(E)?(o=this.BindingType.EntireArray,this.resolvedProperty=E):this.propertyName=C;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}EI.Composite=Rr,EI.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},EI.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},EI.prototype.GetterByBindingType=[EI.prototype._getValue_direct,EI.prototype._getValue_array,EI.prototype._getValue_arrayElement,EI.prototype._getValue_toArray],EI.prototype.SetterByBindingTypeAndVersioning=[[EI.prototype._setValue_direct,EI.prototype._setValue_direct_setNeedsUpdate,EI.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[EI.prototype._setValue_array,EI.prototype._setValue_array_setNeedsUpdate,EI.prototype._setValue_array_setMatrixWorldNeedsUpdate],[EI.prototype._setValue_arrayElement,EI.prototype._setValue_arrayElement_setNeedsUpdate,EI.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[EI.prototype._setValue_fromArray,EI.prototype._setValue_fromArray_setNeedsUpdate,EI.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Wt=new LA;class Pt{constructor(A,I,g=0,C=1/0){this.ray=new sB(A,I),this.near=g,this.far=C,this.camera=null,this.layers=new mi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,I){this.ray.set(A,I)}setFromCamera(A,I){I.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(I.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(I).sub(this.ray.origin).normalize(),this.camera=I):I.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(I.near+I.far)/(I.near-I.far)).unproject(I),this.ray.direction.set(0,0,-1).transformDirection(I.matrixWorld),this.camera=I):console.error("THREE.Raycaster: Unsupported camera type: "+I.type)}setFromXRController(A){return Wt.identity().extractRotation(A.matrixWorld),this.ray.origin.setFromMatrixPosition(A.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wt),this}intersectObject(A,I=!0,g=[]){return So(A,this,g,I),g.sort(jt),g}intersectObjects(A,I=!0,g=[]){for(let C=0,Q=A.length;C<Q;C++)So(A[C],this,g,I);return g.sort(jt),g}}function jt(B,A){return B.distance-A.distance}function So(B,A,I,g){let C=!0;if(B.layers.test(A.layers)&&B.raycast(A,I)===!1&&(C=!1),C===!0&&g===!0){const Q=B.children;for(let E=0,i=Q.length;E<i;E++)So(Q[E],A,I,!0)}}class Vt{constructor(A=1,I=0,g=0){return this.radius=A,this.phi=I,this.theta=g,this}set(A,I,g){return this.radius=A,this.phi=I,this.theta=g,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=OA(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,I,g){return this.radius=Math.sqrt(A*A+I*I+g*g),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,g),this.phi=Math.acos(OA(I/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const pr=new R,Xt=new FA,zt=new FA;class dr extends SI{constructor(A,I,g){super(),this.light=A,this.matrix=A.matrixWorld,this.matrixAutoUpdate=!1,this.color=g,this.type="HemisphereLightHelper";const C=new oo(I);C.rotateY(Math.PI*.5),this.material=new ug({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const Q=C.getAttribute("position"),E=new Float32Array(Q.count*3);C.setAttribute("color",new _I(E,3)),this.add(new vI(C,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const A=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const I=A.geometry.getAttribute("color");Xt.copy(this.light.color),zt.copy(this.light.groundColor);for(let g=0,C=I.count;g<C;g++){const Q=g<C/2?Xt:zt;I.setXYZ(g,Q.r,Q.g,Q.b)}I.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),A.lookAt(pr.setFromMatrixPosition(this.light.matrixWorld).negate())}}class qr extends KC{constructor(A,I=null){super(),this.object=A,this.domElement=I,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function $t(B,A,I,g){const C=Yr(g);switch(I){case de:return B*A;case Ye:return B*A;case Le:return B*A*2;case VE:return B*A/C.components*C.byteLength;case XE:return B*A/C.components*C.byteLength;case ue:return B*A*2/C.components*C.byteLength;case zE:return B*A*2/C.components*C.byteLength;case qe:return B*A*3/C.components*C.byteLength;case eg:return B*A*4/C.components*C.byteLength;case $E:return B*A*4/C.components*C.byteLength;case FQ:case RQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case pQ:case dQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case Ii:case Ci:return Math.max(B,16)*Math.max(A,8)/4;case Ai:case gi:return Math.max(B,8)*Math.max(A,8)/2;case Bi:case Qi:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case Ei:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case ii:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case oi:return Math.floor((B+4)/5)*Math.floor((A+3)/4)*16;case ei:return Math.floor((B+4)/5)*Math.floor((A+4)/5)*16;case ti:return Math.floor((B+5)/6)*Math.floor((A+4)/5)*16;case ai:return Math.floor((B+5)/6)*Math.floor((A+5)/6)*16;case Di:return Math.floor((B+7)/8)*Math.floor((A+4)/5)*16;case si:return Math.floor((B+7)/8)*Math.floor((A+5)/6)*16;case hi:return Math.floor((B+7)/8)*Math.floor((A+7)/8)*16;case ri:return Math.floor((B+9)/10)*Math.floor((A+4)/5)*16;case Si:return Math.floor((B+9)/10)*Math.floor((A+5)/6)*16;case ni:return Math.floor((B+9)/10)*Math.floor((A+7)/8)*16;case wi:return Math.floor((B+9)/10)*Math.floor((A+9)/10)*16;case ci:return Math.floor((B+11)/12)*Math.floor((A+9)/10)*16;case li:return Math.floor((B+11)/12)*Math.floor((A+11)/12)*16;case qQ:case Gi:case ki:return Math.ceil(B/4)*Math.ceil(A/4)*16;case He:case yi:return Math.ceil(B/4)*Math.ceil(A/4)*8;case Ui:case Mi:return Math.ceil(B/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${I} format.`)}function Yr(B){switch(B){case Wg:case Fe:return{byteLength:1,components:1};case xB:case Re:case bB:return{byteLength:2,components:1};case PE:case jE:return{byteLength:2,components:4};case NC:case WE:case ng:return{byteLength:4,components:1};case pe:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${B}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:LE}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=LE);function Aa(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function Lr(B){const A=new WeakMap;function I(i,o){const e=i.array,t=i.usage,a=e.byteLength,D=B.createBuffer();B.bindBuffer(o,D),B.bufferData(o,e,t),i.onUploadCallback();let h;if(e instanceof Float32Array)h=B.FLOAT;else if(e instanceof Uint16Array)i.isFloat16BufferAttribute?h=B.HALF_FLOAT:h=B.UNSIGNED_SHORT;else if(e instanceof Int16Array)h=B.SHORT;else if(e instanceof Uint32Array)h=B.UNSIGNED_INT;else if(e instanceof Int32Array)h=B.INT;else if(e instanceof Int8Array)h=B.BYTE;else if(e instanceof Uint8Array)h=B.UNSIGNED_BYTE;else if(e instanceof Uint8ClampedArray)h=B.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+e);return{buffer:D,type:h,bytesPerElement:e.BYTES_PER_ELEMENT,version:i.version,size:a}}function g(i,o,e){const t=o.array,a=o.updateRanges;if(B.bindBuffer(e,i),a.length===0)B.bufferSubData(e,0,t);else{a.sort((h,n)=>h.start-n.start);let D=0;for(let h=1;h<a.length;h++){const n=a[D],w=a[h];w.start<=n.start+n.count+1?n.count=Math.max(n.count,w.start+w.count-n.start):(++D,a[D]=w)}a.length=D+1;for(let h=0,n=a.length;h<n;h++){const w=a[h];B.bufferSubData(e,w.start*t.BYTES_PER_ELEMENT,t,w.start,w.count)}o.clearUpdateRanges()}o.onUploadCallback()}function C(i){return i.isInterleavedBufferAttribute&&(i=i.data),A.get(i)}function Q(i){i.isInterleavedBufferAttribute&&(i=i.data);const o=A.get(i);o&&(B.deleteBuffer(o.buffer),A.delete(i))}function E(i,o){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){const t=A.get(i);(!t||t.version<i.version)&&A.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}const e=A.get(i);if(e===void 0)A.set(i,I(i,o));else if(e.version<i.version){if(e.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(e.buffer,i,o),e.version=i.version}}return{get:C,remove:Q,update:E}}var ur=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hr=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mr=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fr=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tr=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xr=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,br=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Or=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_r=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vr=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zr=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wr=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pr=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jr=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vr=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xr=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$r=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ES=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DS="gl_FragColor = linearToOutputTexel( gl_FragColor );",sS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,An=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,In=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gn=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cn=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bn=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qn=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,En=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,on=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,en=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tn=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,an=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dn=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sn=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hn=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rn=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sn=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nn=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wn=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cn=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ln=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gn=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kn=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yn=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Un=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mn=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nn=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kn=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jn=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fn=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rn=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pn=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ln=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const un=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hn=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fn=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xn=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bn=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,On=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_n=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vn=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wn=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pn=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jn=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vn=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xn=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zn=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$n=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ew=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TA={alphahash_fragment:ur,alphahash_pars_fragment:Hr,alphamap_fragment:mr,alphamap_pars_fragment:fr,alphatest_fragment:Tr,alphatest_pars_fragment:xr,aomap_fragment:br,aomap_pars_fragment:Or,batching_pars_vertex:_r,batching_vertex:vr,begin_vertex:Zr,beginnormal_vertex:Wr,bsdfs:Pr,iridescence_fragment:jr,bumpmap_pars_fragment:Vr,clipping_planes_fragment:Xr,clipping_planes_pars_fragment:zr,clipping_planes_pars_vertex:$r,clipping_planes_vertex:AS,color_fragment:IS,color_pars_fragment:gS,color_pars_vertex:CS,color_vertex:BS,common:QS,cube_uv_reflection_fragment:ES,defaultnormal_vertex:iS,displacementmap_pars_vertex:oS,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:aS,colorspace_fragment:DS,colorspace_pars_fragment:sS,envmap_fragment:hS,envmap_common_pars_fragment:rS,envmap_pars_fragment:SS,envmap_pars_vertex:nS,envmap_physical_pars_fragment:JS,envmap_vertex:wS,fog_vertex:cS,fog_pars_vertex:lS,fog_fragment:GS,fog_pars_fragment:kS,gradientmap_pars_fragment:yS,lightmap_pars_fragment:US,lights_lambert_fragment:MS,lights_lambert_pars_fragment:NS,lights_pars_begin:KS,lights_toon_fragment:FS,lights_toon_pars_fragment:RS,lights_phong_fragment:pS,lights_phong_pars_fragment:dS,lights_physical_fragment:qS,lights_physical_pars_fragment:YS,lights_fragment_begin:LS,lights_fragment_maps:uS,lights_fragment_end:HS,logdepthbuf_fragment:mS,logdepthbuf_pars_fragment:fS,logdepthbuf_pars_vertex:TS,logdepthbuf_vertex:xS,map_fragment:bS,map_pars_fragment:OS,map_particle_fragment:_S,map_particle_pars_fragment:vS,metalnessmap_fragment:ZS,metalnessmap_pars_fragment:WS,morphinstance_vertex:PS,morphcolor_vertex:jS,morphnormal_vertex:VS,morphtarget_pars_vertex:XS,morphtarget_vertex:zS,normal_fragment_begin:$S,normal_fragment_maps:An,normal_pars_fragment:In,normal_pars_vertex:gn,normal_vertex:Cn,normalmap_pars_fragment:Bn,clearcoat_normal_fragment_begin:Qn,clearcoat_normal_fragment_maps:En,clearcoat_pars_fragment:on,iridescence_pars_fragment:en,opaque_fragment:tn,packing:an,premultiplied_alpha_fragment:Dn,project_vertex:sn,dithering_fragment:hn,dithering_pars_fragment:rn,roughnessmap_fragment:Sn,roughnessmap_pars_fragment:nn,shadowmap_pars_fragment:wn,shadowmap_pars_vertex:cn,shadowmap_vertex:ln,shadowmask_pars_fragment:Gn,skinbase_vertex:kn,skinning_pars_vertex:yn,skinning_vertex:Un,skinnormal_vertex:Mn,specularmap_fragment:Nn,specularmap_pars_fragment:Kn,tonemapping_fragment:Jn,tonemapping_pars_fragment:Fn,transmission_fragment:Rn,transmission_pars_fragment:pn,uv_pars_fragment:dn,uv_pars_vertex:qn,uv_vertex:Yn,worldpos_vertex:Ln,background_vert:un,background_frag:Hn,backgroundCube_vert:mn,backgroundCube_frag:fn,cube_vert:Tn,cube_frag:xn,depth_vert:bn,depth_frag:On,distanceRGBA_vert:_n,distanceRGBA_frag:vn,equirect_vert:Zn,equirect_frag:Wn,linedashed_vert:Pn,linedashed_frag:jn,meshbasic_vert:Vn,meshbasic_frag:Xn,meshlambert_vert:zn,meshlambert_frag:$n,meshmatcap_vert:Aw,meshmatcap_frag:Iw,meshnormal_vert:gw,meshnormal_frag:Cw,meshphong_vert:Bw,meshphong_frag:Qw,meshphysical_vert:Ew,meshphysical_frag:iw,meshtoon_vert:ow,meshtoon_frag:ew,points_vert:tw,points_frag:aw,shadow_vert:Dw,shadow_frag:sw,sprite_vert:hw,sprite_frag:rw},iA={common:{diffuse:{value:new FA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fA},alphaMap:{value:null},alphaMapTransform:{value:new fA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fA}},envmap:{envMap:{value:null},envMapRotation:{value:new fA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fA},normalScale:{value:new JA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new FA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new FA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fA},alphaTest:{value:0},uvTransform:{value:new fA}},sprite:{diffuse:{value:new FA(16777215)},opacity:{value:1},center:{value:new JA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fA},alphaMap:{value:null},alphaMapTransform:{value:new fA},alphaTest:{value:0}}},fg={basic:{uniforms:jI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.fog]),vertexShader:TA.meshbasic_vert,fragmentShader:TA.meshbasic_frag},lambert:{uniforms:jI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new FA(0)}}]),vertexShader:TA.meshlambert_vert,fragmentShader:TA.meshlambert_frag},phong:{uniforms:jI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new FA(0)},specular:{value:new FA(1118481)},shininess:{value:30}}]),vertexShader:TA.meshphong_vert,fragmentShader:TA.meshphong_frag},standard:{uniforms:jI([iA.common,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.roughnessmap,iA.metalnessmap,iA.fog,iA.lights,{emissive:{value:new FA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:TA.meshphysical_vert,fragmentShader:TA.meshphysical_frag},toon:{uniforms:jI([iA.common,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.gradientmap,iA.fog,iA.lights,{emissive:{value:new FA(0)}}]),vertexShader:TA.meshtoon_vert,fragmentShader:TA.meshtoon_frag},matcap:{uniforms:jI([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,{matcap:{value:null}}]),vertexShader:TA.meshmatcap_vert,fragmentShader:TA.meshmatcap_frag},points:{uniforms:jI([iA.points,iA.fog]),vertexShader:TA.points_vert,fragmentShader:TA.points_frag},dashed:{uniforms:jI([iA.common,iA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:TA.linedashed_vert,fragmentShader:TA.linedashed_frag},depth:{uniforms:jI([iA.common,iA.displacementmap]),vertexShader:TA.depth_vert,fragmentShader:TA.depth_frag},normal:{uniforms:jI([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,{opacity:{value:1}}]),vertexShader:TA.meshnormal_vert,fragmentShader:TA.meshnormal_frag},sprite:{uniforms:jI([iA.sprite,iA.fog]),vertexShader:TA.sprite_vert,fragmentShader:TA.sprite_frag},background:{uniforms:{uvTransform:{value:new fA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:TA.background_vert,fragmentShader:TA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fA}},vertexShader:TA.backgroundCube_vert,fragmentShader:TA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:TA.cube_vert,fragmentShader:TA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:TA.equirect_vert,fragmentShader:TA.equirect_frag},distanceRGBA:{uniforms:jI([iA.common,iA.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:TA.distanceRGBA_vert,fragmentShader:TA.distanceRGBA_frag},shadow:{uniforms:jI([iA.lights,iA.fog,{color:{value:new FA(0)},opacity:{value:1}}]),vertexShader:TA.shadow_vert,fragmentShader:TA.shadow_frag}};fg.physical={uniforms:jI([fg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fA},clearcoatNormalScale:{value:new JA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fA},sheen:{value:0},sheenColor:{value:new FA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fA},transmissionSamplerSize:{value:new JA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fA},attenuationDistance:{value:0},attenuationColor:{value:new FA(0)},specularColor:{value:new FA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fA},anisotropyVector:{value:new JA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fA}}]),vertexShader:TA.meshphysical_vert,fragmentShader:TA.meshphysical_frag};const eE={r:0,b:0,g:0},LC=new Yg,Sw=new LA;function nw(B,A,I,g,C,Q,E){const i=new FA(0);let o=Q===!0?0:1,e,t,a=null,D=0,h=null;function n(U){let k=U.isScene===!0?U.background:null;return k&&k.isTexture&&(k=(U.backgroundBlurriness>0?I:A).get(k)),k}function w(U){let k=!1;const d=n(U);d===null?r(i,o):d&&d.isColor&&(r(d,1),k=!0);const F=B.xr.getEnvironmentBlendMode();F==="additive"?g.buffers.color.setClear(0,0,0,1,E):F==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(B.autoClear||k)&&(g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil))}function S(U,k){const d=n(k);d&&(d.isCubeTexture||d.mapping===NQ)?(t===void 0&&(t=new vI(new dC(1,1,1),new nC({name:"BackgroundCubeMaterial",uniforms:lB(fg.backgroundCube.uniforms),vertexShader:fg.backgroundCube.vertexShader,fragmentShader:fg.backgroundCube.fragmentShader,side:$I,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(F,K,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),LC.copy(k.backgroundRotation),LC.x*=-1,LC.y*=-1,LC.z*=-1,d.isCubeTexture&&d.isRenderTargetTexture===!1&&(LC.y*=-1,LC.z*=-1),t.material.uniforms.envMap.value=d,t.material.uniforms.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,t.material.uniforms.backgroundRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(LC)),t.material.toneMapped=PA.getTransfer(d.colorSpace)!==oI,(a!==d||D!==d.version||h!==B.toneMapping)&&(t.material.needsUpdate=!0,a=d,D=d.version,h=B.toneMapping),t.layers.enableAll(),U.unshift(t,t.geometry,t.material,0,0,null)):d&&d.isTexture&&(e===void 0&&(e=new vI(new iE(2,2),new nC({name:"BackgroundMaterial",uniforms:lB(fg.background.uniforms),vertexShader:fg.background.vertexShader,fragmentShader:fg.background.fragmentShader,side:vg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=d,e.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,e.material.toneMapped=PA.getTransfer(d.colorSpace)!==oI,d.matrixAutoUpdate===!0&&d.updateMatrix(),e.material.uniforms.uvTransform.value.copy(d.matrix),(a!==d||D!==d.version||h!==B.toneMapping)&&(e.material.needsUpdate=!0,a=d,D=d.version,h=B.toneMapping),e.layers.enableAll(),U.unshift(e,e.geometry,e.material,0,0,null))}function r(U,k){U.getRGB(eE,rt(B)),g.buffers.color.setClear(eE.r,eE.g,eE.b,k,E)}function M(){t!==void 0&&(t.geometry.dispose(),t.material.dispose()),e!==void 0&&(e.geometry.dispose(),e.material.dispose())}return{getClearColor:function(){return i},setClearColor:function(U,k=1){i.set(U),o=k,r(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(U){o=U,r(i,o)},render:w,addToRenderList:S,dispose:M}}function ww(B,A){const I=B.getParameter(B.MAX_VERTEX_ATTRIBS),g={},C=D(null);let Q=C,E=!1;function i(G,Y,O,v,P){let IA=!1;const W=a(v,O,Y);Q!==W&&(Q=W,e(Q.object)),IA=h(G,v,O,P),IA&&n(G,v,O,P),P!==null&&A.update(P,B.ELEMENT_ARRAY_BUFFER),(IA||E)&&(E=!1,k(G,Y,O,v),P!==null&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,A.get(P).buffer))}function o(){return B.createVertexArray()}function e(G){return B.bindVertexArray(G)}function t(G){return B.deleteVertexArray(G)}function a(G,Y,O){const v=O.wireframe===!0;let P=g[G.id];P===void 0&&(P={},g[G.id]=P);let IA=P[Y.id];IA===void 0&&(IA={},P[Y.id]=IA);let W=IA[v];return W===void 0&&(W=D(o()),IA[v]=W),W}function D(G){const Y=[],O=[],v=[];for(let P=0;P<I;P++)Y[P]=0,O[P]=0,v[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:O,attributeDivisors:v,object:G,attributes:{},index:null}}function h(G,Y,O,v){const P=Q.attributes,IA=Y.attributes;let W=0;const gA=O.getAttributes();for(const Z in gA)if(gA[Z].location>=0){const QA=P[Z];let wA=IA[Z];if(wA===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(wA=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(wA=G.instanceColor)),QA===void 0||QA.attribute!==wA||wA&&QA.data!==wA.data)return!0;W++}return Q.attributesNum!==W||Q.index!==v}function n(G,Y,O,v){const P={},IA=Y.attributes;let W=0;const gA=O.getAttributes();for(const Z in gA)if(gA[Z].location>=0){let QA=IA[Z];QA===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(QA=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(QA=G.instanceColor));const wA={};wA.attribute=QA,QA&&QA.data&&(wA.data=QA.data),P[Z]=wA,W++}Q.attributes=P,Q.attributesNum=W,Q.index=v}function w(){const G=Q.newAttributes;for(let Y=0,O=G.length;Y<O;Y++)G[Y]=0}function S(G){r(G,0)}function r(G,Y){const O=Q.newAttributes,v=Q.enabledAttributes,P=Q.attributeDivisors;O[G]=1,v[G]===0&&(B.enableVertexAttribArray(G),v[G]=1),P[G]!==Y&&(B.vertexAttribDivisor(G,Y),P[G]=Y)}function M(){const G=Q.newAttributes,Y=Q.enabledAttributes;for(let O=0,v=Y.length;O<v;O++)Y[O]!==G[O]&&(B.disableVertexAttribArray(O),Y[O]=0)}function U(G,Y,O,v,P,IA,W){W===!0?B.vertexAttribIPointer(G,Y,O,P,IA):B.vertexAttribPointer(G,Y,O,v,P,IA)}function k(G,Y,O,v){w();const P=v.attributes,IA=O.getAttributes(),W=Y.defaultAttributeValues;for(const gA in IA){const Z=IA[gA];if(Z.location>=0){let QA=P[gA];if(QA===void 0&&(gA==="instanceMatrix"&&G.instanceMatrix&&(QA=G.instanceMatrix),gA==="instanceColor"&&G.instanceColor&&(QA=G.instanceColor)),QA!==void 0){const wA=QA.normalized,HA=QA.itemSize,ZA=A.get(QA);if(ZA===void 0)continue;const sI=ZA.buffer,j=ZA.type,BA=ZA.bytesPerElement,lA=j===B.INT||j===B.UNSIGNED_INT||QA.gpuType===WE;if(QA.isInterleavedBufferAttribute){const eA=QA.data,RA=eA.stride,mA=QA.offset;if(eA.isInstancedInterleavedBuffer){for(let WA=0;WA<Z.locationSize;WA++)r(Z.location+WA,eA.meshPerAttribute);G.isInstancedMesh!==!0&&v._maxInstanceCount===void 0&&(v._maxInstanceCount=eA.meshPerAttribute*eA.count)}else for(let WA=0;WA<Z.locationSize;WA++)S(Z.location+WA);B.bindBuffer(B.ARRAY_BUFFER,sI);for(let WA=0;WA<Z.locationSize;WA++)U(Z.location+WA,HA/Z.locationSize,j,wA,RA*BA,(mA+HA/Z.locationSize*WA)*BA,lA)}else{if(QA.isInstancedBufferAttribute){for(let eA=0;eA<Z.locationSize;eA++)r(Z.location+eA,QA.meshPerAttribute);G.isInstancedMesh!==!0&&v._maxInstanceCount===void 0&&(v._maxInstanceCount=QA.meshPerAttribute*QA.count)}else for(let eA=0;eA<Z.locationSize;eA++)S(Z.location+eA);B.bindBuffer(B.ARRAY_BUFFER,sI);for(let eA=0;eA<Z.locationSize;eA++)U(Z.location+eA,HA/Z.locationSize,j,wA,HA*BA,HA/Z.locationSize*eA*BA,lA)}}else if(W!==void 0){const wA=W[gA];if(wA!==void 0)switch(wA.length){case 2:B.vertexAttrib2fv(Z.location,wA);break;case 3:B.vertexAttrib3fv(Z.location,wA);break;case 4:B.vertexAttrib4fv(Z.location,wA);break;default:B.vertexAttrib1fv(Z.location,wA)}}}}M()}function d(){q();for(const G in g){const Y=g[G];for(const O in Y){const v=Y[O];for(const P in v)t(v[P].object),delete v[P];delete Y[O]}delete g[G]}}function F(G){if(g[G.id]===void 0)return;const Y=g[G.id];for(const O in Y){const v=Y[O];for(const P in v)t(v[P].object),delete v[P];delete Y[O]}delete g[G.id]}function K(G){for(const Y in g){const O=g[Y];if(O[G.id]===void 0)continue;const v=O[G.id];for(const P in v)t(v[P].object),delete v[P];delete O[G.id]}}function q(){y(),E=!0,Q!==C&&(Q=C,e(Q.object))}function y(){C.geometry=null,C.program=null,C.wireframe=!1}return{setup:i,reset:q,resetDefaultState:y,dispose:d,releaseStatesOfGeometry:F,releaseStatesOfProgram:K,initAttributes:w,enableAttribute:S,disableUnusedAttributes:M}}function cw(B,A,I){let g;function C(e){g=e}function Q(e,t){B.drawArrays(g,e,t),I.update(t,g,1)}function E(e,t,a){a!==0&&(B.drawArraysInstanced(g,e,t,a),I.update(t,g,a))}function i(e,t,a){if(a===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(g,e,0,t,0,a);let D=0;for(let h=0;h<a;h++)D+=t[h];I.update(D,g,1)}function o(e,t,a,D){if(a===0)return;const h=A.get("WEBGL_multi_draw");if(h===null)for(let n=0;n<e.length;n++)E(e[n],t[n],D[n]);else{h.multiDrawArraysInstancedWEBGL(g,e,0,t,0,D,0,a);let n=0;for(let w=0;w<a;w++)n+=t[w]*D[w];I.update(n,g,1)}}this.setMode=C,this.render=Q,this.renderInstances=E,this.renderMultiDraw=i,this.renderMultiDrawInstances=o}function lw(B,A,I,g){let C;function Q(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const K=A.get("EXT_texture_filter_anisotropic");C=B.getParameter(K.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function E(K){return!(K!==eg&&g.convert(K)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(K){const q=K===bB&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(K!==Wg&&g.convert(K)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&K!==ng&&!q)}function o(K){if(K==="highp"){if(B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.HIGH_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.HIGH_FLOAT).precision>0)return"highp";K="mediump"}return K==="mediump"&&B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.MEDIUM_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let e=I.precision!==void 0?I.precision:"highp";const t=o(e);t!==e&&(console.warn("THREE.WebGLRenderer:",e,"not supported, using",t,"instead."),e=t);const a=I.logarithmicDepthBuffer===!0,D=I.reverseDepthBuffer===!0&&A.has("EXT_clip_control"),h=B.getParameter(B.MAX_TEXTURE_IMAGE_UNITS),n=B.getParameter(B.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=B.getParameter(B.MAX_TEXTURE_SIZE),S=B.getParameter(B.MAX_CUBE_MAP_TEXTURE_SIZE),r=B.getParameter(B.MAX_VERTEX_ATTRIBS),M=B.getParameter(B.MAX_VERTEX_UNIFORM_VECTORS),U=B.getParameter(B.MAX_VARYING_VECTORS),k=B.getParameter(B.MAX_FRAGMENT_UNIFORM_VECTORS),d=n>0,F=B.getParameter(B.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:o,textureFormatReadable:E,textureTypeReadable:i,precision:e,logarithmicDepthBuffer:a,reverseDepthBuffer:D,maxTextures:h,maxVertexTextures:n,maxTextureSize:w,maxCubemapSize:S,maxAttributes:r,maxVertexUniforms:M,maxVaryings:U,maxFragmentUniforms:k,vertexTextures:d,maxSamples:F}}function Gw(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new cC,i=new fA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,D){const h=a.length!==0||D||g!==0||C;return C=D,g=a.length,h},this.beginShadows=function(){Q=!0,t(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,D){I=t(a,D,0)},this.setState=function(a,D,h){const n=a.clippingPlanes,w=a.clipIntersection,S=a.clipShadows,r=B.get(a);if(!C||n===null||n.length===0||Q&&!S)Q?t(null):e();else{const M=Q?0:g,U=M*4;let k=r.clippingState||null;o.value=k,k=t(n,D,U,h);for(let d=0;d!==U;++d)k[d]=I[d];r.clippingState=k,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=M}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,D,h,n){const w=a!==null?a.length:0;let S=null;if(w!==0){if(S=o.value,n!==!0||S===null){const r=h+w*4,M=D.matrixWorldInverse;i.getNormalMatrix(M),(S===null||S.length<r)&&(S=new Float32Array(r));for(let U=0,k=h;U!==w;++U,k+=4)E.copy(a[U]).applyMatrix4(M,i),E.normal.toArray(S,k),S[k+3]=E.constant}o.value=S,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,S}}function kw(B){let A=new WeakMap;function I(E,i){return i===vE?E.mapping=$C:i===ZE&&(E.mapping=AB),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===vE||i===ZE)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new mh(o.height);return e.fromEquirectangularTexture(B,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}const RB=4,Ia=[.125,.215,.35,.446,.526,.582],uC=20,no=new so,ga=new FA;let wo=null,co=0,lo=0,Go=!1;const HC=(1+Math.sqrt(5))/2,pB=1/HC,Ca=[new R(-HC,pB,0),new R(HC,pB,0),new R(-pB,0,HC),new R(pB,0,HC),new R(0,HC,-pB),new R(0,HC,pB),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Ba{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){wo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ia(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(wo,co,lo),this._renderer.xr.enabled=Go,A.scissorTest=!1,tE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===$C||A.mapping===AB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),wo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:Ig,minFilter:Ig,generateMipmaps:!1,type:bB,format:eg,colorSpace:PI,depthBuffer:!1},C=Qa(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yw(Q)),this._blurMaterial=Uw(Q,A,I)}return C}_compileMaterial(A){const I=new vI(this._lodPlanes[0],A);this._renderer.compile(I,no)}_sceneToCubeUV(A,I,g,C){const Q=new VI(90,1,I,g),E=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],o=this._renderer,e=o.autoClear,t=o.toneMapping;o.getClearColor(ga),o.toneMapping=eC,o.autoClear=!1;const a=new ug({name:"PMREM.Background",side:$I,depthWrite:!1,depthTest:!1}),D=new vI(new dC,a);let h=!1;const n=A.background;n?n.isColor&&(a.color.copy(n),A.background=null,h=!0):(a.color.copy(ga),h=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(Q.up.set(0,E[w],0),Q.lookAt(i[w],0,0)):S===1?(Q.up.set(0,0,E[w]),Q.lookAt(0,i[w],0)):(Q.up.set(0,E[w],0),Q.lookAt(0,0,i[w]));const r=this._cubeSize;tE(C,S*r,w>2?r:0,r,r),o.setRenderTarget(C),h&&o.render(D,Q),o.render(A,Q)}D.geometry.dispose(),D.material.dispose(),o.toneMapping=t,o.autoClear=e,A.background=n}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===$C||A.mapping===AB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=ia()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ea());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new vI(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;tE(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,no)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const C=this._lodPlanes.length;for(let Q=1;Q<C;Q++){const E=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),i=Ca[(C-Q-1)%Ca.length];this._blur(A,Q-1,Q,E,i)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new vI(this._lodPlanes[C],e),D=e.uniforms,h=this._sizeLods[g]-1,n=isFinite(Q)?Math.PI/(2*h):2*Math.PI/(2*uC-1),w=Q/n,S=isFinite(Q)?1+Math.floor(t*w):uC;S>uC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${uC}`);const r=[];let M=0;for(let K=0;K<uC;++K){const q=K/w,y=Math.exp(-q*q/2);r.push(y),K===0?M+=y:K<S&&(M+=2*y)}for(let K=0;K<r.length;K++)r[K]=r[K]/M;D.envMap.value=A.texture,D.samples.value=S,D.weights.value=r,D.latitudinal.value=E==="latitudinal",i&&(D.poleAxis.value=i);const{_lodMax:U}=this;D.dTheta.value=n,D.mipInt.value=U-g;const k=this._sizeLods[C],d=3*k*(C>U-RB?C-U+RB:0),F=4*(this._cubeSize-k);tE(I,d,F,3*k,2*k),o.setRenderTarget(I),o.render(a,no)}}function yw(B){const A=[],I=[],g=[];let C=B;const Q=B-RB+1+Ia.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-RB?o=Ia[E-B+RB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,D=[t,t,a,t,a,a,t,t,a,a,t,a],h=6,n=6,w=3,S=2,r=1,M=new Float32Array(w*n*h),U=new Float32Array(S*n*h),k=new Float32Array(r*n*h);for(let F=0;F<h;F++){const K=F%3*2/3-1,q=F>2?0:-1,y=[K,q,0,K+2/3,q,0,K+2/3,q+1,0,K,q,0,K+2/3,q+1,0,K,q+1,0];M.set(y,w*n*F),U.set(D,S*n*F);const G=[F,F,F,F,F,F];k.set(G,r*n*F)}const d=new Ug;d.setAttribute("position",new _I(M,w)),d.setAttribute("uv",new _I(U,S)),d.setAttribute("faceIndex",new _I(k,r)),A.push(d),C>RB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Qa(B,A,I){const g=new JC(B,A,I);return g.texture.mapping=NQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function tE(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function Uw(B,A,I){const g=new Float32Array(uC),C=new R(0,1,0);return new nC({name:"SphericalGaussianBlur",defines:{n:uC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oC,depthTest:!1,depthWrite:!1})}function Ea(){return new nC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oC,depthTest:!1,depthWrite:!1})}function ia(){return new nC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oC,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mw(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===vE||o===ZE,t=o===$C||o===AB;if(e||t){let a=A.get(i);const D=a!==void 0?a.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==D)return I===null&&(I=new Ba(B)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),a.texture;if(a!==void 0)return a.texture;{const h=i.image;return e&&h&&h.height>0||t&&h&&C(h)?(I===null&&(I=new Ba(B)),a=e?I.fromEquirectangular(i):I.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),i.addEventListener("dispose",Q),a.texture):null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function Nw(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const C=I(g);return C===null&&iB("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Kw(B,A,I,g){const C={},Q=new WeakMap;function E(a){const D=a.target;D.index!==null&&A.remove(D.index);for(const n in D.attributes)A.remove(D.attributes[n]);D.removeEventListener("dispose",E),delete C[D.id];const h=Q.get(D);h&&(A.remove(h),Q.delete(D)),g.releaseStatesOfGeometry(D),D.isInstancedBufferGeometry===!0&&delete D._maxInstanceCount,I.memory.geometries--}function i(a,D){return C[D.id]===!0||(D.addEventListener("dispose",E),C[D.id]=!0,I.memory.geometries++),D}function o(a){const D=a.attributes;for(const h in D)A.update(D[h],B.ARRAY_BUFFER)}function e(a){const D=[],h=a.index,n=a.attributes.position;let w=0;if(h!==null){const M=h.array;w=h.version;for(let U=0,k=M.length;U<k;U+=3){const d=M[U+0],F=M[U+1],K=M[U+2];D.push(d,F,F,K,K,d)}}else if(n!==void 0){const M=n.array;w=n.version;for(let U=0,k=M.length/3-1;U<k;U+=3){const d=U+0,F=U+1,K=U+2;D.push(d,F,F,K,K,d)}}else return;const S=new(Pe(D)?at:tt)(D,1);S.version=w;const r=Q.get(a);r&&A.remove(r),Q.set(a,S)}function t(a){const D=Q.get(a);if(D){const h=a.index;h!==null&&D.version<h.version&&e(a)}else e(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function Jw(B,A,I){let g;function C(D){g=D}let Q,E;function i(D){Q=D.type,E=D.bytesPerElement}function o(D,h){B.drawElements(g,h,Q,D*E),I.update(h,g,1)}function e(D,h,n){n!==0&&(B.drawElementsInstanced(g,h,Q,D*E,n),I.update(h,g,n))}function t(D,h,n){if(n===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(g,h,0,Q,D,0,n);let w=0;for(let S=0;S<n;S++)w+=h[S];I.update(w,g,1)}function a(D,h,n,w){if(n===0)return;const S=A.get("WEBGL_multi_draw");if(S===null)for(let r=0;r<D.length;r++)e(D[r]/E,h[r],w[r]);else{S.multiDrawElementsInstancedWEBGL(g,h,0,Q,D,0,w,0,n);let r=0;for(let M=0;M<n;M++)r+=h[M]*w[M];I.update(r,g,1)}}this.setMode=C,this.setIndex=i,this.render=o,this.renderInstances=e,this.renderMultiDraw=t,this.renderMultiDrawInstances=a}function Fw(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case B.TRIANGLES:I.triangles+=i*(Q/3);break;case B.LINES:I.lines+=i*(Q/2);break;case B.LINE_STRIP:I.lines+=i*(Q-1);break;case B.LINE_LOOP:I.lines+=i*Q;break;case B.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function Rw(B,A,I){const g=new WeakMap,C=new CI;function Q(E,i,o){const e=E.morphTargetInfluences,t=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,a=t!==void 0?t.length:0;let D=g.get(i);if(D===void 0||D.count!==a){let h=function(){q.dispose(),g.delete(i),i.removeEventListener("dispose",h)};D!==void 0&&D.texture.dispose();const n=i.morphAttributes.position!==void 0,w=i.morphAttributes.normal!==void 0,S=i.morphAttributes.color!==void 0,r=i.morphAttributes.position||[],M=i.morphAttributes.normal||[],U=i.morphAttributes.color||[];let k=0;n===!0&&(k=1),w===!0&&(k=2),S===!0&&(k=3);let d=i.attributes.position.count*k,F=1;d>A.maxTextureSize&&(F=Math.ceil(d/A.maxTextureSize),d=A.maxTextureSize);const K=new Float32Array(d*F*4*a),q=new $e(K,d,F,a);q.type=ng,q.needsUpdate=!0;const y=k*4;for(let G=0;G<a;G++){const Y=r[G],O=M[G],v=U[G],P=d*F*4*G;for(let IA=0;IA<Y.count;IA++){const W=IA*y;n===!0&&(C.fromBufferAttribute(Y,IA),K[P+W+0]=C.x,K[P+W+1]=C.y,K[P+W+2]=C.z,K[P+W+3]=0),w===!0&&(C.fromBufferAttribute(O,IA),K[P+W+4]=C.x,K[P+W+5]=C.y,K[P+W+6]=C.z,K[P+W+7]=0),S===!0&&(C.fromBufferAttribute(v,IA),K[P+W+8]=C.x,K[P+W+9]=C.y,K[P+W+10]=C.z,K[P+W+11]=v.itemSize===4?C.w:1)}}D={count:a,texture:q,size:new JA(d,F)},g.set(i,D),i.addEventListener("dispose",h)}if(E.isInstancedMesh===!0&&E.morphTexture!==null)o.getUniforms().setValue(B,"morphTexture",E.morphTexture,I);else{let h=0;for(let w=0;w<e.length;w++)h+=e[w];const n=i.morphTargetsRelative?1:1-h;o.getUniforms().setValue(B,"morphTargetBaseInfluence",n),o.getUniforms().setValue(B,"morphTargetInfluences",e)}o.getUniforms().setValue(B,"morphTargetsTexture",D.texture,I),o.getUniforms().setValue(B,"morphTargetsTextureSize",D.size)}return{update:Q}}function pw(B,A,I,g){let C=new WeakMap;function Q(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);if(C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),C.get(o)!==e&&(I.update(o.instanceMatrix,B.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,B.ARRAY_BUFFER),C.set(o,e))),o.isSkinnedMesh){const D=o.skeleton;C.get(D)!==e&&(D.update(),C.set(D,e))}return a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:Q,dispose:E}}const oa=new LI,ea=new mt(1,1),ta=new $e,aa=new kh,Da=new ct,sa=[],ha=[],ra=new Float32Array(16),Sa=new Float32Array(9),na=new Float32Array(4);function dB(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=sa[C];if(Q===void 0&&(Q=new Float32Array(C),sa[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function RI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function pI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function aE(B,A){let I=ha[A];I===void 0&&(I=new Int32Array(A),ha[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function dw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function qw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(RI(I,A))return;B.uniform2fv(this.addr,A),pI(I,A)}}function Yw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(RI(I,A))return;B.uniform3fv(this.addr,A),pI(I,A)}}function Lw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(RI(I,A))return;B.uniform4fv(this.addr,A),pI(I,A)}}function uw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(RI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),pI(I,A)}else{if(RI(I,g))return;na.set(g),B.uniformMatrix2fv(this.addr,!1,na),pI(I,g)}}function Hw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(RI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),pI(I,A)}else{if(RI(I,g))return;Sa.set(g),B.uniformMatrix3fv(this.addr,!1,Sa),pI(I,g)}}function mw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(RI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),pI(I,A)}else{if(RI(I,g))return;ra.set(g),B.uniformMatrix4fv(this.addr,!1,ra),pI(I,g)}}function fw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function Tw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(RI(I,A))return;B.uniform2iv(this.addr,A),pI(I,A)}}function xw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(RI(I,A))return;B.uniform3iv(this.addr,A),pI(I,A)}}function bw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(RI(I,A))return;B.uniform4iv(this.addr,A),pI(I,A)}}function Ow(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function _w(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(RI(I,A))return;B.uniform2uiv(this.addr,A),pI(I,A)}}function vw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(RI(I,A))return;B.uniform3uiv(this.addr,A),pI(I,A)}}function Zw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(RI(I,A))return;B.uniform4uiv(this.addr,A),pI(I,A)}}function Ww(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C);let Q;this.type===B.SAMPLER_2D_SHADOW?(ea.compareFunction=_e,Q=ea):Q=oa,I.setTexture2D(A||Q,C)}function Pw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||aa,C)}function jw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Da,C)}function Vw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||ta,C)}function Xw(B){switch(B){case 5126:return dw;case 35664:return qw;case 35665:return Yw;case 35666:return Lw;case 35674:return uw;case 35675:return Hw;case 35676:return mw;case 5124:case 35670:return fw;case 35667:case 35671:return Tw;case 35668:case 35672:return xw;case 35669:case 35673:return bw;case 5125:return Ow;case 36294:return _w;case 36295:return vw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Vw}}function zw(B,A){B.uniform1fv(this.addr,A)}function $w(B,A){const I=dB(A,this.size,2);B.uniform2fv(this.addr,I)}function Ac(B,A){const I=dB(A,this.size,3);B.uniform3fv(this.addr,I)}function Ic(B,A){const I=dB(A,this.size,4);B.uniform4fv(this.addr,I)}function gc(B,A){const I=dB(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function Cc(B,A){const I=dB(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function Bc(B,A){const I=dB(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function Qc(B,A){B.uniform1iv(this.addr,A)}function Ec(B,A){B.uniform2iv(this.addr,A)}function ic(B,A){B.uniform3iv(this.addr,A)}function oc(B,A){B.uniform4iv(this.addr,A)}function ec(B,A){B.uniform1uiv(this.addr,A)}function tc(B,A){B.uniform2uiv(this.addr,A)}function ac(B,A){B.uniform3uiv(this.addr,A)}function Dc(B,A){B.uniform4uiv(this.addr,A)}function sc(B,A,I){const g=this.cache,C=A.length,Q=aE(I,C);RI(g,Q)||(B.uniform1iv(this.addr,Q),pI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||oa,Q[E])}function hc(B,A,I){const g=this.cache,C=A.length,Q=aE(I,C);RI(g,Q)||(B.uniform1iv(this.addr,Q),pI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||aa,Q[E])}function rc(B,A,I){const g=this.cache,C=A.length,Q=aE(I,C);RI(g,Q)||(B.uniform1iv(this.addr,Q),pI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||Da,Q[E])}function Sc(B,A,I){const g=this.cache,C=A.length,Q=aE(I,C);RI(g,Q)||(B.uniform1iv(this.addr,Q),pI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||ta,Q[E])}function nc(B){switch(B){case 5126:return zw;case 35664:return $w;case 35665:return Ac;case 35666:return Ic;case 35674:return gc;case 35675:return Cc;case 35676:return Bc;case 5124:case 35670:return Qc;case 35667:case 35671:return Ec;case 35668:case 35672:return ic;case 35669:case 35673:return oc;case 5125:return ec;case 36294:return tc;case 36295:return ac;case 36296:return Dc;case 35678:case 36198:case 36298:case 36306:case 35682:return sc;case 35679:case 36299:case 36307:return hc;case 35680:case 36300:case 36308:case 36293:return rc;case 36289:case 36303:case 36311:case 36292:return Sc}}class wc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=Xw(I.type)}}class cc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=nc(I.type)}}class lc{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function wa(B,A){B.seq.push(A),B.map[A.id]=A}function Gc(B,A,I){const g=B.name,C=g.length;for(yo.lastIndex=0;;){const Q=yo.exec(g),E=yo.lastIndex;let i=Q[1];const o=Q[2]==="]",e=Q[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){wa(I,e===void 0?new wc(i,B,A):new cc(i,B,A));break}else{let t=I.map[i];t===void 0&&(t=new lc(i),wa(I,t)),I=t}}}class DE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);Gc(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function ca(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}const kc=37297;let yc=0;function Uc(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}const la=new fA;function Mc(B){PA._getMatrix(la,PA.workingColorSpace,B);const A=`mat3( ${la.elements.map(I=>I.toFixed(4))} )`;switch(PA.getTransfer(B)){case YQ:return[A,"LinearTransferOETF"];case oI:return[A,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",B),[A,"LinearTransferOETF"]}}function Ga(B,A,I){const g=B.getShaderParameter(A,B.COMPILE_STATUS),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+Uc(B.getShaderSource(A),E)}else return C}function Nc(B,A){const I=Mc(A);return[`vec4 ${B}( vec4 value ) {`,`	return ${I[1]}( vec4( value.rgb * ${I[0]}, value.a ) );`,"}"].join(`
`)}function Kc(B,A){let I;switch(A){case ps:I="Linear";break;case ds:I="Reinhard";break;case qs:I="Cineon";break;case Ys:I="ACESFilmic";break;case us:I="AgX";break;case Hs:I="Neutral";break;case Ls:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}const sE=new R;function Jc(){PA.getLuminanceCoefficients(sE);const B=sE.x.toFixed(4),A=sE.y.toFixed(4),I=sE.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${B}, ${A}, ${I} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fc(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",B.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(QQ).join(`
`)}function Rc(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function pc(B,A){const I={},g=B.getProgramParameter(A,B.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===B.FLOAT_MAT2&&(i=2),Q.type===B.FLOAT_MAT3&&(i=3),Q.type===B.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function QQ(B){return B!==""}function ka(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function ya(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const dc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(B){return B.replace(dc,Yc)}const qc=new Map;function Yc(B,A){let I=TA[A];if(I===void 0){const g=qc.get(A);if(g!==void 0)I=TA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return Uo(I)}const Lc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ua(B){return B.replace(Lc,uc)}function uc(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function Ma(B){let A=`precision ${B.precision} float;
	precision ${B.precision} int;
	precision ${B.precision} sampler2D;
	precision ${B.precision} samplerCube;
	precision ${B.precision} sampler3D;
	precision ${B.precision} sampler2DArray;
	precision ${B.precision} sampler2DShadow;
	precision ${B.precision} samplerCubeShadow;
	precision ${B.precision} sampler2DArrayShadow;
	precision ${B.precision} isampler2D;
	precision ${B.precision} isampler3D;
	precision ${B.precision} isamplerCube;
	precision ${B.precision} isampler2DArray;
	precision ${B.precision} usampler2D;
	precision ${B.precision} usampler3D;
	precision ${B.precision} usamplerCube;
	precision ${B.precision} usampler2DArray;
	`;return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Hc(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===Ge?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===ts?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===_g&&(A="SHADOWMAP_TYPE_VSM"),A}function mc(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case $C:case AB:A="ENVMAP_TYPE_CUBE";break;case NQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function fc(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case AB:A="ENVMAP_MODE_REFRACTION";break}return A}function Tc(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case Me:A="ENVMAP_BLENDING_MULTIPLY";break;case Fs:A="ENVMAP_BLENDING_MIX";break;case Rs:A="ENVMAP_BLENDING_ADD";break}return A}function xc(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function bc(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=Hc(I),e=mc(I),t=fc(I),a=Tc(I),D=xc(I),h=Fc(I),n=Rc(Q),w=C.createProgram();let S,r,M=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(S=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n].filter(QQ).join(`
`),S.length>0&&(S+=`
`),r=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n].filter(QQ).join(`
`),r.length>0&&(r+=`
`)):(S=[Ma(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(QQ).join(`
`),r=[Ma(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",D?"#define CUBEUV_TEXEL_WIDTH "+D.texelWidth:"",D?"#define CUBEUV_TEXEL_HEIGHT "+D.texelHeight:"",D?"#define CUBEUV_MAX_MIP "+D.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==eC?"#define TONE_MAPPING":"",I.toneMapping!==eC?TA.tonemapping_pars_fragment:"",I.toneMapping!==eC?Kc("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",TA.colorspace_pars_fragment,Nc("linearToOutputTexel",I.outputColorSpace),Jc(),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(QQ).join(`
`)),E=Uo(E),E=ka(E,I),E=ya(E,I),i=Uo(i),i=ka(i,I),i=ya(i,I),E=Ua(E),i=Ua(i),I.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,S=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,r=["#define varying in",I.glslVersion===ve?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===ve?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const U=M+S+E,k=M+r+i,d=ca(C,C.VERTEX_SHADER,U),F=ca(C,C.FRAGMENT_SHADER,k);C.attachShader(w,d),C.attachShader(w,F),I.index0AttributeName!==void 0?C.bindAttribLocation(w,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(w,0,"position"),C.linkProgram(w);function K(Y){if(B.debug.checkShaderErrors){const O=C.getProgramInfoLog(w).trim(),v=C.getShaderInfoLog(d).trim(),P=C.getShaderInfoLog(F).trim();let IA=!0,W=!0;if(C.getProgramParameter(w,C.LINK_STATUS)===!1)if(IA=!1,typeof B.debug.onShaderError=="function")B.debug.onShaderError(C,w,d,F);else{const gA=Ga(C,d,"vertex"),Z=Ga(C,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(w,C.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+O+`
`+gA+`
`+Z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(v===""||P==="")&&(W=!1);W&&(Y.diagnostics={runnable:IA,programLog:O,vertexShader:{log:v,prefix:S},fragmentShader:{log:P,prefix:r}})}C.deleteShader(d),C.deleteShader(F),q=new DE(C,w),y=pc(C,w)}let q;this.getUniforms=function(){return q===void 0&&K(this),q};let y;this.getAttributes=function(){return y===void 0&&K(this),y};let G=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=C.getProgramParameter(w,kc)),G},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(w),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=yc++,this.cacheKey=A,this.usedTimes=1,this.program=w,this.vertexShader=d,this.fragmentShader=F,this}let Oc=0;class _c{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new vc(A),I.set(A,g)),g}}class vc{constructor(A){this.id=Oc++,this.code=A,this.usedTimes=0}}function Zc(B,A,I,g,C,Q,E){const i=new mi,o=new _c,e=new Set,t=[],a=C.logarithmicDepthBuffer,D=C.vertexTextures;let h=C.precision;const n={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(y){return e.add(y),y===0?"uv":`uv${y}`}function S(y,G,Y,O,v){const P=O.fog,IA=v.geometry,W=y.isMeshStandardMaterial?O.environment:null,gA=(y.isMeshStandardMaterial?I:A).get(y.envMap||W),Z=gA&&gA.mapping===NQ?gA.image.height:null,QA=n[y.type];y.precision!==null&&(h=C.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const wA=IA.morphAttributes.position||IA.morphAttributes.normal||IA.morphAttributes.color,HA=wA!==void 0?wA.length:0;let ZA=0;IA.morphAttributes.position!==void 0&&(ZA=1),IA.morphAttributes.normal!==void 0&&(ZA=2),IA.morphAttributes.color!==void 0&&(ZA=3);let sI,j,BA,lA;if(QA){const iI=fg[QA];sI=iI.vertexShader,j=iI.fragmentShader}else sI=y.vertexShader,j=y.fragmentShader,o.update(y),BA=o.getVertexShaderID(y),lA=o.getFragmentShaderID(y);const eA=B.getRenderTarget(),RA=B.state.buffers.depth.getReversed(),mA=v.isInstancedMesh===!0,WA=v.isBatchedMesh===!0,GI=!!y.map,AI=!!y.matcap,MI=!!gA,p=!!y.aoMap,hg=!!y.lightMap,VA=!!y.bumpMap,XA=!!y.normalMap,kA=!!y.displacementMap,wI=!!y.emissiveMap,yA=!!y.metalnessMap,N=!!y.roughnessMap,c=y.anisotropy>0,T=y.clearcoat>0,X=y.dispersion>0,AA=y.iridescence>0,V=y.sheen>0,GA=y.transmission>0,tA=c&&!!y.anisotropyMap,nA=T&&!!y.clearcoatMap,II=T&&!!y.clearcoatNormalMap,CA=T&&!!y.clearcoatRoughnessMap,hA=AA&&!!y.iridescenceMap,KA=AA&&!!y.iridescenceThicknessMap,pA=V&&!!y.sheenColorMap,rA=V&&!!y.sheenRoughnessMap,zA=!!y.specularMap,bA=!!y.specularColorMap,hI=!!y.specularIntensityMap,H=GA&&!!y.transmissionMap,oA=GA&&!!y.thicknessMap,_=!!y.gradientMap,z=!!y.alphaMap,aA=y.alphaTest>0,EA=!!y.alphaHash,$A=!!y.extensions;let kI=eC;y.toneMapped&&(eA===null||eA.isXRRenderTarget===!0)&&(kI=B.toneMapping);const ZI={shaderID:QA,shaderType:y.type,shaderName:y.name,vertexShader:sI,fragmentShader:j,defines:y.defines,customVertexShaderID:BA,customFragmentShaderID:lA,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:WA,batchingColor:WA&&v._colorsTexture!==null,instancing:mA,instancingColor:mA&&v.instanceColor!==null,instancingMorph:mA&&v.morphTexture!==null,supportsVertexTextures:D,outputColorSpace:eA===null?B.outputColorSpace:eA.isXRRenderTarget===!0?eA.texture.colorSpace:PI,alphaToCoverage:!!y.alphaToCoverage,map:GI,matcap:AI,envMap:MI,envMapMode:MI&&gA.mapping,envMapCubeUVHeight:Z,aoMap:p,lightMap:hg,bumpMap:VA,normalMap:XA,displacementMap:D&&kA,emissiveMap:wI,normalMapObjectSpace:XA&&y.normalMapType===Os,normalMapTangentSpace:XA&&y.normalMapType===be,metalnessMap:yA,roughnessMap:N,anisotropy:c,anisotropyMap:tA,clearcoat:T,clearcoatMap:nA,clearcoatNormalMap:II,clearcoatRoughnessMap:CA,dispersion:X,iridescence:AA,iridescenceMap:hA,iridescenceThicknessMap:KA,sheen:V,sheenColorMap:pA,sheenRoughnessMap:rA,specularMap:zA,specularColorMap:bA,specularIntensityMap:hI,transmission:GA,transmissionMap:H,thicknessMap:oA,gradientMap:_,opaque:y.transparent===!1&&y.blending===XC&&y.alphaToCoverage===!1,alphaMap:z,alphaTest:aA,alphaHash:EA,combine:y.combine,mapUv:GI&&w(y.map.channel),aoMapUv:p&&w(y.aoMap.channel),lightMapUv:hg&&w(y.lightMap.channel),bumpMapUv:VA&&w(y.bumpMap.channel),normalMapUv:XA&&w(y.normalMap.channel),displacementMapUv:kA&&w(y.displacementMap.channel),emissiveMapUv:wI&&w(y.emissiveMap.channel),metalnessMapUv:yA&&w(y.metalnessMap.channel),roughnessMapUv:N&&w(y.roughnessMap.channel),anisotropyMapUv:tA&&w(y.anisotropyMap.channel),clearcoatMapUv:nA&&w(y.clearcoatMap.channel),clearcoatNormalMapUv:II&&w(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:CA&&w(y.clearcoatRoughnessMap.channel),iridescenceMapUv:hA&&w(y.iridescenceMap.channel),iridescenceThicknessMapUv:KA&&w(y.iridescenceThicknessMap.channel),sheenColorMapUv:pA&&w(y.sheenColorMap.channel),sheenRoughnessMapUv:rA&&w(y.sheenRoughnessMap.channel),specularMapUv:zA&&w(y.specularMap.channel),specularColorMapUv:bA&&w(y.specularColorMap.channel),specularIntensityMapUv:hI&&w(y.specularIntensityMap.channel),transmissionMapUv:H&&w(y.transmissionMap.channel),thicknessMapUv:oA&&w(y.thicknessMap.channel),alphaMapUv:z&&w(y.alphaMap.channel),vertexTangents:!!IA.attributes.tangent&&(XA||c),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!IA.attributes.color&&IA.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!IA.attributes.uv&&(GI||z),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,reverseDepthBuffer:RA,skinning:v.isSkinnedMesh===!0,morphTargets:IA.morphAttributes.position!==void 0,morphNormals:IA.morphAttributes.normal!==void 0,morphColors:IA.morphAttributes.color!==void 0,morphTargetsCount:HA,morphTextureStride:ZA,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numLightProbes:G.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:y.dithering,shadowMapEnabled:B.shadowMap.enabled&&Y.length>0,shadowMapType:B.shadowMap.type,toneMapping:kI,decodeVideoTexture:GI&&y.map.isVideoTexture===!0&&PA.getTransfer(y.map.colorSpace)===oI,decodeVideoTextureEmissive:wI&&y.emissiveMap.isVideoTexture===!0&&PA.getTransfer(y.emissiveMap.colorSpace)===oI,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pg,flipSided:y.side===$I,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$A&&y.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($A&&y.extensions.multiDraw===!0||WA)&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ZI.vertexUv1s=e.has(1),ZI.vertexUv2s=e.has(2),ZI.vertexUv3s=e.has(3),e.clear(),ZI}function r(y){const G=[];if(y.shaderID?G.push(y.shaderID):(G.push(y.customVertexShaderID),G.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Y in y.defines)G.push(Y),G.push(y.defines[Y]);return y.isRawShaderMaterial===!1&&(M(G,y),U(G,y),G.push(B.outputColorSpace)),G.push(y.customProgramCacheKey),G.join()}function M(y,G){y.push(G.precision),y.push(G.outputColorSpace),y.push(G.envMapMode),y.push(G.envMapCubeUVHeight),y.push(G.mapUv),y.push(G.alphaMapUv),y.push(G.lightMapUv),y.push(G.aoMapUv),y.push(G.bumpMapUv),y.push(G.normalMapUv),y.push(G.displacementMapUv),y.push(G.emissiveMapUv),y.push(G.metalnessMapUv),y.push(G.roughnessMapUv),y.push(G.anisotropyMapUv),y.push(G.clearcoatMapUv),y.push(G.clearcoatNormalMapUv),y.push(G.clearcoatRoughnessMapUv),y.push(G.iridescenceMapUv),y.push(G.iridescenceThicknessMapUv),y.push(G.sheenColorMapUv),y.push(G.sheenRoughnessMapUv),y.push(G.specularMapUv),y.push(G.specularColorMapUv),y.push(G.specularIntensityMapUv),y.push(G.transmissionMapUv),y.push(G.thicknessMapUv),y.push(G.combine),y.push(G.fogExp2),y.push(G.sizeAttenuation),y.push(G.morphTargetsCount),y.push(G.morphAttributeCount),y.push(G.numDirLights),y.push(G.numPointLights),y.push(G.numSpotLights),y.push(G.numSpotLightMaps),y.push(G.numHemiLights),y.push(G.numRectAreaLights),y.push(G.numDirLightShadows),y.push(G.numPointLightShadows),y.push(G.numSpotLightShadows),y.push(G.numSpotLightShadowsWithMaps),y.push(G.numLightProbes),y.push(G.shadowMapType),y.push(G.toneMapping),y.push(G.numClippingPlanes),y.push(G.numClipIntersection),y.push(G.depthPacking)}function U(y,G){i.disableAll(),G.supportsVertexTextures&&i.enable(0),G.instancing&&i.enable(1),G.instancingColor&&i.enable(2),G.instancingMorph&&i.enable(3),G.matcap&&i.enable(4),G.envMap&&i.enable(5),G.normalMapObjectSpace&&i.enable(6),G.normalMapTangentSpace&&i.enable(7),G.clearcoat&&i.enable(8),G.iridescence&&i.enable(9),G.alphaTest&&i.enable(10),G.vertexColors&&i.enable(11),G.vertexAlphas&&i.enable(12),G.vertexUv1s&&i.enable(13),G.vertexUv2s&&i.enable(14),G.vertexUv3s&&i.enable(15),G.vertexTangents&&i.enable(16),G.anisotropy&&i.enable(17),G.alphaHash&&i.enable(18),G.batching&&i.enable(19),G.dispersion&&i.enable(20),G.batchingColor&&i.enable(21),y.push(i.mask),i.disableAll(),G.fog&&i.enable(0),G.useFog&&i.enable(1),G.flatShading&&i.enable(2),G.logarithmicDepthBuffer&&i.enable(3),G.reverseDepthBuffer&&i.enable(4),G.skinning&&i.enable(5),G.morphTargets&&i.enable(6),G.morphNormals&&i.enable(7),G.morphColors&&i.enable(8),G.premultipliedAlpha&&i.enable(9),G.shadowMapEnabled&&i.enable(10),G.doubleSided&&i.enable(11),G.flipSided&&i.enable(12),G.useDepthPacking&&i.enable(13),G.dithering&&i.enable(14),G.transmission&&i.enable(15),G.sheen&&i.enable(16),G.opaque&&i.enable(17),G.pointsUvs&&i.enable(18),G.decodeVideoTexture&&i.enable(19),G.decodeVideoTextureEmissive&&i.enable(20),G.alphaToCoverage&&i.enable(21),y.push(i.mask)}function k(y){const G=n[y.type];let Y;if(G){const O=fg[G];Y=Yh.clone(O.uniforms)}else Y=y.uniforms;return Y}function d(y,G){let Y;for(let O=0,v=t.length;O<v;O++){const P=t[O];if(P.cacheKey===G){Y=P,++Y.usedTimes;break}}return Y===void 0&&(Y=new bc(B,G,y,Q),t.push(Y)),Y}function F(y){if(--y.usedTimes===0){const G=t.indexOf(y);t[G]=t[t.length-1],t.pop(),y.destroy()}}function K(y){o.remove(y)}function q(){o.dispose()}return{getParameters:S,getProgramCacheKey:r,getUniforms:k,acquireProgram:d,releaseProgram:F,releaseShaderCache:K,programs:t,dispose:q}}function Wc(){let B=new WeakMap;function A(E){return B.has(E)}function I(E){let i=B.get(E);return i===void 0&&(i={},B.set(E,i)),i}function g(E){B.delete(E)}function C(E,i,o){B.get(E)[i]=o}function Q(){B=new WeakMap}return{has:A,get:I,remove:g,update:C,dispose:Q}}function Pc(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function Na(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function Ka(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,D,h,n,w,S){let r=B[A];return r===void 0?(r={id:a.id,object:a,geometry:D,material:h,groupOrder:n,renderOrder:a.renderOrder,z:w,group:S},B[A]=r):(r.id=a.id,r.object=a,r.geometry=D,r.material=h,r.groupOrder=n,r.renderOrder=a.renderOrder,r.z=w,r.group=S),A++,r}function i(a,D,h,n,w,S){const r=E(a,D,h,n,w,S);h.transmission>0?g.push(r):h.transparent===!0?C.push(r):I.push(r)}function o(a,D,h,n,w,S){const r=E(a,D,h,n,w,S);h.transmission>0?g.unshift(r):h.transparent===!0?C.unshift(r):I.unshift(r)}function e(a,D){I.length>1&&I.sort(a||Pc),g.length>1&&g.sort(D||Na),C.length>1&&C.sort(D||Na)}function t(){for(let a=A,D=B.length;a<D;a++){const h=B[a];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:t,sort:e}}function jc(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new Ka,B.set(g,[E])):C>=Q.length?(E=new Ka,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function Vc(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new R,color:new FA};break;case"SpotLight":I={position:new R,direction:new R,color:new FA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new R,color:new FA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new R,skyColor:new FA,groundColor:new FA};break;case"RectAreaLight":I={color:new FA,position:new R,halfWidth:new R,halfHeight:new R};break}return B[A.id]=I,I}}}function Xc(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new JA};break;case"SpotLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new JA};break;case"PointLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new JA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let zc=0;function $c(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function Al(B){const A=new Vc,I=Xc(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)g.probe.push(new R);const C=new R,Q=new LA,E=new LA;function i(e){let t=0,a=0,D=0;for(let y=0;y<9;y++)g.probe[y].set(0,0,0);let h=0,n=0,w=0,S=0,r=0,M=0,U=0,k=0,d=0,F=0,K=0;e.sort($c);for(let y=0,G=e.length;y<G;y++){const Y=e[y],O=Y.color,v=Y.intensity,P=Y.distance,IA=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)t+=O.r*v,a+=O.g*v,D+=O.b*v;else if(Y.isLightProbe){for(let W=0;W<9;W++)g.probe[W].addScaledVector(Y.sh.coefficients[W],v);K++}else if(Y.isDirectionalLight){const W=A.get(Y);if(W.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const gA=Y.shadow,Z=I.get(Y);Z.shadowIntensity=gA.intensity,Z.shadowBias=gA.bias,Z.shadowNormalBias=gA.normalBias,Z.shadowRadius=gA.radius,Z.shadowMapSize=gA.mapSize,g.directionalShadow[h]=Z,g.directionalShadowMap[h]=IA,g.directionalShadowMatrix[h]=Y.shadow.matrix,M++}g.directional[h]=W,h++}else if(Y.isSpotLight){const W=A.get(Y);W.position.setFromMatrixPosition(Y.matrixWorld),W.color.copy(O).multiplyScalar(v),W.distance=P,W.coneCos=Math.cos(Y.angle),W.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),W.decay=Y.decay,g.spot[w]=W;const gA=Y.shadow;if(Y.map&&(g.spotLightMap[d]=Y.map,d++,gA.updateMatrices(Y),Y.castShadow&&F++),g.spotLightMatrix[w]=gA.matrix,Y.castShadow){const Z=I.get(Y);Z.shadowIntensity=gA.intensity,Z.shadowBias=gA.bias,Z.shadowNormalBias=gA.normalBias,Z.shadowRadius=gA.radius,Z.shadowMapSize=gA.mapSize,g.spotShadow[w]=Z,g.spotShadowMap[w]=IA,k++}w++}else if(Y.isRectAreaLight){const W=A.get(Y);W.color.copy(O).multiplyScalar(v),W.halfWidth.set(Y.width*.5,0,0),W.halfHeight.set(0,Y.height*.5,0),g.rectArea[S]=W,S++}else if(Y.isPointLight){const W=A.get(Y);if(W.color.copy(Y.color).multiplyScalar(Y.intensity),W.distance=Y.distance,W.decay=Y.decay,Y.castShadow){const gA=Y.shadow,Z=I.get(Y);Z.shadowIntensity=gA.intensity,Z.shadowBias=gA.bias,Z.shadowNormalBias=gA.normalBias,Z.shadowRadius=gA.radius,Z.shadowMapSize=gA.mapSize,Z.shadowCameraNear=gA.camera.near,Z.shadowCameraFar=gA.camera.far,g.pointShadow[n]=Z,g.pointShadowMap[n]=IA,g.pointShadowMatrix[n]=Y.shadow.matrix,U++}g.point[n]=W,n++}else if(Y.isHemisphereLight){const W=A.get(Y);W.skyColor.copy(Y.color).multiplyScalar(v),W.groundColor.copy(Y.groundColor).multiplyScalar(v),g.hemi[r]=W,r++}}S>0&&(B.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=iA.LTC_FLOAT_1,g.rectAreaLTC2=iA.LTC_FLOAT_2):(g.rectAreaLTC1=iA.LTC_HALF_1,g.rectAreaLTC2=iA.LTC_HALF_2)),g.ambient[0]=t,g.ambient[1]=a,g.ambient[2]=D;const q=g.hash;(q.directionalLength!==h||q.pointLength!==n||q.spotLength!==w||q.rectAreaLength!==S||q.hemiLength!==r||q.numDirectionalShadows!==M||q.numPointShadows!==U||q.numSpotShadows!==k||q.numSpotMaps!==d||q.numLightProbes!==K)&&(g.directional.length=h,g.spot.length=w,g.rectArea.length=S,g.point.length=n,g.hemi.length=r,g.directionalShadow.length=M,g.directionalShadowMap.length=M,g.pointShadow.length=U,g.pointShadowMap.length=U,g.spotShadow.length=k,g.spotShadowMap.length=k,g.directionalShadowMatrix.length=M,g.pointShadowMatrix.length=U,g.spotLightMatrix.length=k+d-F,g.spotLightMap.length=d,g.numSpotLightShadowsWithMaps=F,g.numLightProbes=K,q.directionalLength=h,q.pointLength=n,q.spotLength=w,q.rectAreaLength=S,q.hemiLength=r,q.numDirectionalShadows=M,q.numPointShadows=U,q.numSpotShadows=k,q.numSpotMaps=d,q.numLightProbes=K,g.version=zc++)}function o(e,t){let a=0,D=0,h=0,n=0,w=0;const S=t.matrixWorldInverse;for(let r=0,M=e.length;r<M;r++){const U=e[r];if(U.isDirectionalLight){const k=g.directional[a];k.direction.setFromMatrixPosition(U.matrixWorld),C.setFromMatrixPosition(U.target.matrixWorld),k.direction.sub(C),k.direction.transformDirection(S),a++}else if(U.isSpotLight){const k=g.spot[h];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(S),k.direction.setFromMatrixPosition(U.matrixWorld),C.setFromMatrixPosition(U.target.matrixWorld),k.direction.sub(C),k.direction.transformDirection(S),h++}else if(U.isRectAreaLight){const k=g.rectArea[n];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(S),E.identity(),Q.copy(U.matrixWorld),Q.premultiply(S),E.extractRotation(Q),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),k.halfWidth.applyMatrix4(E),k.halfHeight.applyMatrix4(E),n++}else if(U.isPointLight){const k=g.point[D];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(S),D++}else if(U.isHemisphereLight){const k=g.hemi[w];k.direction.setFromMatrixPosition(U.matrixWorld),k.direction.transformDirection(S),w++}}}return{setup:i,setupView:o,state:g}}function Ja(B){const A=new Al(B),I=[],g=[];function C(t){e.camera=t,I.length=0,g.length=0}function Q(t){I.push(t)}function E(t){g.push(t)}function i(){A.setup(I)}function o(t){A.setupView(I,t)}const e={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:C,state:e,setupLights:i,setupLightsView:o,pushLight:Q,pushShadow:E}}function Il(B){let A=new WeakMap;function I(C,Q=0){const E=A.get(C);let i;return E===void 0?(i=new Ja(B),A.set(C,[i])):Q>=E.length?(i=new Ja(B),E.push(i)):i=E[Q],i}function g(){A=new WeakMap}return{get:I,dispose:g}}const gl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bl(B,A,I){let g=new Co;const C=new JA,Q=new JA,E=new CI,i=new Xh({depthPacking:bs}),o=new zh,e={},t=I.maxTextureSize,a={[vg]:$I,[$I]:vg,[pg]:pg},D=new nC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new JA},radius:{value:4}},vertexShader:gl,fragmentShader:Cl}),h=D.clone();h.defines.HORIZONTAL_PASS=1;const n=new Ug;n.setAttribute("position",new _I(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vI(n,D),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ge;let r=this.type;this.render=function(F,K,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const y=B.getRenderTarget(),G=B.getActiveCubeFace(),Y=B.getActiveMipmapLevel(),O=B.state;O.setBlending(oC),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const v=r!==_g&&this.type===_g,P=r===_g&&this.type!==_g;for(let IA=0,W=F.length;IA<W;IA++){const gA=F[IA],Z=gA.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",gA,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;C.copy(Z.mapSize);const QA=Z.getFrameExtents();if(C.multiply(QA),Q.copy(Z.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(Q.x=Math.floor(t/QA.x),C.x=Q.x*QA.x,Z.mapSize.x=Q.x),C.y>t&&(Q.y=Math.floor(t/QA.y),C.y=Q.y*QA.y,Z.mapSize.y=Q.y)),Z.map===null||v===!0||P===!0){const HA=this.type!==_g?{minFilter:WI,magFilter:WI}:{};Z.map!==null&&Z.map.dispose(),Z.map=new JC(C.x,C.y,HA),Z.map.texture.name=gA.name+".shadowMap",Z.camera.updateProjectionMatrix()}B.setRenderTarget(Z.map),B.clear();const wA=Z.getViewportCount();for(let HA=0;HA<wA;HA++){const ZA=Z.getViewport(HA);E.set(Q.x*ZA.x,Q.y*ZA.y,Q.x*ZA.z,Q.y*ZA.w),O.viewport(E),Z.updateMatrices(gA,HA),g=Z.getFrustum(),k(K,q,Z.camera,gA,this.type)}Z.isPointLightShadow!==!0&&this.type===_g&&M(Z,q),Z.needsUpdate=!1}r=this.type,S.needsUpdate=!1,B.setRenderTarget(y,G,Y)};function M(F,K){const q=A.update(w);D.defines.VSM_SAMPLES!==F.blurSamples&&(D.defines.VSM_SAMPLES=F.blurSamples,h.defines.VSM_SAMPLES=F.blurSamples,D.needsUpdate=!0,h.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new JC(C.x,C.y)),D.uniforms.shadow_pass.value=F.map.texture,D.uniforms.resolution.value=F.mapSize,D.uniforms.radius.value=F.radius,B.setRenderTarget(F.mapPass),B.clear(),B.renderBufferDirect(K,null,q,D,w,null),h.uniforms.shadow_pass.value=F.mapPass.texture,h.uniforms.resolution.value=F.mapSize,h.uniforms.radius.value=F.radius,B.setRenderTarget(F.map),B.clear(),B.renderBufferDirect(K,null,q,h,w,null)}function U(F,K,q,y){let G=null;const Y=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(Y!==void 0)G=Y;else if(G=q.isPointLight===!0?o:i,B.localClippingEnabled&&K.clipShadows===!0&&Array.isArray(K.clippingPlanes)&&K.clippingPlanes.length!==0||K.displacementMap&&K.displacementScale!==0||K.alphaMap&&K.alphaTest>0||K.map&&K.alphaTest>0){const O=G.uuid,v=K.uuid;let P=e[O];P===void 0&&(P={},e[O]=P);let IA=P[v];IA===void 0&&(IA=G.clone(),P[v]=IA,K.addEventListener("dispose",d)),G=IA}if(G.visible=K.visible,G.wireframe=K.wireframe,y===_g?G.side=K.shadowSide!==null?K.shadowSide:K.side:G.side=K.shadowSide!==null?K.shadowSide:a[K.side],G.alphaMap=K.alphaMap,G.alphaTest=K.alphaTest,G.map=K.map,G.clipShadows=K.clipShadows,G.clippingPlanes=K.clippingPlanes,G.clipIntersection=K.clipIntersection,G.displacementMap=K.displacementMap,G.displacementScale=K.displacementScale,G.displacementBias=K.displacementBias,G.wireframeLinewidth=K.wireframeLinewidth,G.linewidth=K.linewidth,q.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const O=B.properties.get(G);O.light=q}return G}function k(F,K,q,y,G){if(F.visible===!1)return;if(F.layers.test(K.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&G===_g)&&(!F.frustumCulled||g.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const O=A.update(F),v=F.material;if(Array.isArray(v)){const P=O.groups;for(let IA=0,W=P.length;IA<W;IA++){const gA=P[IA],Z=v[gA.materialIndex];if(Z&&Z.visible){const QA=U(F,Z,y,G);F.onBeforeShadow(B,F,K,q,O,QA,gA),B.renderBufferDirect(q,null,O,QA,F,gA),F.onAfterShadow(B,F,K,q,O,QA,gA)}}}else if(v.visible){const P=U(F,v,y,G);F.onBeforeShadow(B,F,K,q,O,P,null),B.renderBufferDirect(q,null,O,P,F,null),F.onAfterShadow(B,F,K,q,O,P,null)}}const Y=F.children;for(let O=0,v=Y.length;O<v;O++)k(Y[O],K,q,y,G)}function d(F){F.target.removeEventListener("dispose",d);for(const K in e){const q=e[K],y=F.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}const Ql={[mE]:fE,[TE]:OE,[xE]:_E,[zC]:bE,[fE]:mE,[OE]:TE,[_E]:xE,[bE]:zC};function El(B,A){function I(){let H=!1;const oA=new CI;let _=null;const z=new CI(0,0,0,0);return{setMask:function(aA){_!==aA&&!H&&(B.colorMask(aA,aA,aA,aA),_=aA)},setLocked:function(aA){H=aA},setClear:function(aA,EA,$A,kI,ZI){ZI===!0&&(aA*=kI,EA*=kI,$A*=kI),oA.set(aA,EA,$A,kI),z.equals(oA)===!1&&(B.clearColor(aA,EA,$A,kI),z.copy(oA))},reset:function(){H=!1,_=null,z.set(-1,0,0,0)}}}function g(){let H=!1,oA=!1,_=null,z=null,aA=null;return{setReversed:function(EA){if(oA!==EA){const $A=A.get("EXT_clip_control");oA?$A.clipControlEXT($A.LOWER_LEFT_EXT,$A.ZERO_TO_ONE_EXT):$A.clipControlEXT($A.LOWER_LEFT_EXT,$A.NEGATIVE_ONE_TO_ONE_EXT);const kI=aA;aA=null,this.setClear(kI)}oA=EA},getReversed:function(){return oA},setTest:function(EA){EA?eA(B.DEPTH_TEST):RA(B.DEPTH_TEST)},setMask:function(EA){_!==EA&&!H&&(B.depthMask(EA),_=EA)},setFunc:function(EA){if(oA&&(EA=Ql[EA]),z!==EA){switch(EA){case mE:B.depthFunc(B.NEVER);break;case fE:B.depthFunc(B.ALWAYS);break;case TE:B.depthFunc(B.LESS);break;case zC:B.depthFunc(B.LEQUAL);break;case xE:B.depthFunc(B.EQUAL);break;case bE:B.depthFunc(B.GEQUAL);break;case OE:B.depthFunc(B.GREATER);break;case _E:B.depthFunc(B.NOTEQUAL);break;default:B.depthFunc(B.LEQUAL)}z=EA}},setLocked:function(EA){H=EA},setClear:function(EA){aA!==EA&&(oA&&(EA=1-EA),B.clearDepth(EA),aA=EA)},reset:function(){H=!1,_=null,z=null,aA=null,oA=!1}}}function C(){let H=!1,oA=null,_=null,z=null,aA=null,EA=null,$A=null,kI=null,ZI=null;return{setTest:function(iI){H||(iI?eA(B.STENCIL_TEST):RA(B.STENCIL_TEST))},setMask:function(iI){oA!==iI&&!H&&(B.stencilMask(iI),oA=iI)},setFunc:function(iI,Jg,iC){(_!==iI||z!==Jg||aA!==iC)&&(B.stencilFunc(iI,Jg,iC),_=iI,z=Jg,aA=iC)},setOp:function(iI,Jg,iC){(EA!==iI||$A!==Jg||kI!==iC)&&(B.stencilOp(iI,Jg,iC),EA=iI,$A=Jg,kI=iC)},setLocked:function(iI){H=iI},setClear:function(iI){ZI!==iI&&(B.clearStencil(iI),ZI=iI)},reset:function(){H=!1,oA=null,_=null,z=null,aA=null,EA=null,$A=null,kI=null,ZI=null}}}const Q=new I,E=new g,i=new C,o=new WeakMap,e=new WeakMap;let t={},a={},D=new WeakMap,h=[],n=null,w=!1,S=null,r=null,M=null,U=null,k=null,d=null,F=null,K=new FA(0,0,0),q=0,y=!1,G=null,Y=null,O=null,v=null,P=null;const IA=B.getParameter(B.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,gA=0;const Z=B.getParameter(B.VERSION);Z.indexOf("WebGL")!==-1?(gA=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=gA>=1):Z.indexOf("OpenGL ES")!==-1&&(gA=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=gA>=2);let QA=null,wA={};const HA=B.getParameter(B.SCISSOR_BOX),ZA=B.getParameter(B.VIEWPORT),sI=new CI().fromArray(HA),j=new CI().fromArray(ZA);function BA(H,oA,_,z){const aA=new Uint8Array(4),EA=B.createTexture();B.bindTexture(H,EA),B.texParameteri(H,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(H,B.TEXTURE_MAG_FILTER,B.NEAREST);for(let $A=0;$A<_;$A++)H===B.TEXTURE_3D||H===B.TEXTURE_2D_ARRAY?B.texImage3D(oA,0,B.RGBA,1,1,z,0,B.RGBA,B.UNSIGNED_BYTE,aA):B.texImage2D(oA+$A,0,B.RGBA,1,1,0,B.RGBA,B.UNSIGNED_BYTE,aA);return EA}const lA={};lA[B.TEXTURE_2D]=BA(B.TEXTURE_2D,B.TEXTURE_2D,1),lA[B.TEXTURE_CUBE_MAP]=BA(B.TEXTURE_CUBE_MAP,B.TEXTURE_CUBE_MAP_POSITIVE_X,6),lA[B.TEXTURE_2D_ARRAY]=BA(B.TEXTURE_2D_ARRAY,B.TEXTURE_2D_ARRAY,1,1),lA[B.TEXTURE_3D]=BA(B.TEXTURE_3D,B.TEXTURE_3D,1,1),Q.setClear(0,0,0,1),E.setClear(1),i.setClear(0),eA(B.DEPTH_TEST),E.setFunc(zC),VA(!1),XA(le),eA(B.CULL_FACE),p(oC);function eA(H){t[H]!==!0&&(B.enable(H),t[H]=!0)}function RA(H){t[H]!==!1&&(B.disable(H),t[H]=!1)}function mA(H,oA){return a[H]!==oA?(B.bindFramebuffer(H,oA),a[H]=oA,H===B.DRAW_FRAMEBUFFER&&(a[B.FRAMEBUFFER]=oA),H===B.FRAMEBUFFER&&(a[B.DRAW_FRAMEBUFFER]=oA),!0):!1}function WA(H,oA){let _=h,z=!1;if(H){_=D.get(oA),_===void 0&&(_=[],D.set(oA,_));const aA=H.textures;if(_.length!==aA.length||_[0]!==B.COLOR_ATTACHMENT0){for(let EA=0,$A=aA.length;EA<$A;EA++)_[EA]=B.COLOR_ATTACHMENT0+EA;_.length=aA.length,z=!0}}else _[0]!==B.BACK&&(_[0]=B.BACK,z=!0);z&&B.drawBuffers(_)}function GI(H){return n!==H?(B.useProgram(H),n=H,!0):!1}const AI={[MC]:B.FUNC_ADD,[Ds]:B.FUNC_SUBTRACT,[ss]:B.FUNC_REVERSE_SUBTRACT};AI[hs]=B.MIN,AI[rs]=B.MAX;const MI={[Ss]:B.ZERO,[ns]:B.ONE,[ws]:B.SRC_COLOR,[uE]:B.SRC_ALPHA,[Us]:B.SRC_ALPHA_SATURATE,[ks]:B.DST_COLOR,[ls]:B.DST_ALPHA,[cs]:B.ONE_MINUS_SRC_COLOR,[HE]:B.ONE_MINUS_SRC_ALPHA,[ys]:B.ONE_MINUS_DST_COLOR,[Gs]:B.ONE_MINUS_DST_ALPHA,[Ms]:B.CONSTANT_COLOR,[Ns]:B.ONE_MINUS_CONSTANT_COLOR,[Ks]:B.CONSTANT_ALPHA,[Js]:B.ONE_MINUS_CONSTANT_ALPHA};function p(H,oA,_,z,aA,EA,$A,kI,ZI,iI){if(H===oC){w===!0&&(RA(B.BLEND),w=!1);return}if(w===!1&&(eA(B.BLEND),w=!0),H!==as){if(H!==S||iI!==y){if((r!==MC||k!==MC)&&(B.blendEquation(B.FUNC_ADD),r=MC,k=MC),iI)switch(H){case XC:B.blendFuncSeparate(B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case ke:B.blendFunc(B.ONE,B.ONE);break;case ye:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case Ue:B.blendFuncSeparate(B.ZERO,B.SRC_COLOR,B.ZERO,B.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case XC:B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case ke:B.blendFunc(B.SRC_ALPHA,B.ONE);break;case ye:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case Ue:B.blendFunc(B.ZERO,B.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,U=null,d=null,F=null,K.set(0,0,0),q=0,S=H,y=iI}return}aA=aA||oA,EA=EA||_,$A=$A||z,(oA!==r||aA!==k)&&(B.blendEquationSeparate(AI[oA],AI[aA]),r=oA,k=aA),(_!==M||z!==U||EA!==d||$A!==F)&&(B.blendFuncSeparate(MI[_],MI[z],MI[EA],MI[$A]),M=_,U=z,d=EA,F=$A),(kI.equals(K)===!1||ZI!==q)&&(B.blendColor(kI.r,kI.g,kI.b,ZI),K.copy(kI),q=ZI),S=H,y=!1}function hg(H,oA){H.side===pg?RA(B.CULL_FACE):eA(B.CULL_FACE);let _=H.side===$I;oA&&(_=!_),VA(_),H.blending===XC&&H.transparent===!1?p(oC):p(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),E.setFunc(H.depthFunc),E.setTest(H.depthTest),E.setMask(H.depthWrite),Q.setMask(H.colorWrite);const z=H.stencilWrite;i.setTest(z),z&&(i.setMask(H.stencilWriteMask),i.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),i.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),wI(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?eA(B.SAMPLE_ALPHA_TO_COVERAGE):RA(B.SAMPLE_ALPHA_TO_COVERAGE)}function VA(H){G!==H&&(H?B.frontFace(B.CW):B.frontFace(B.CCW),G=H)}function XA(H){H!==os?(eA(B.CULL_FACE),H!==Y&&(H===le?B.cullFace(B.BACK):H===es?B.cullFace(B.FRONT):B.cullFace(B.FRONT_AND_BACK))):RA(B.CULL_FACE),Y=H}function kA(H){H!==O&&(W&&B.lineWidth(H),O=H)}function wI(H,oA,_){H?(eA(B.POLYGON_OFFSET_FILL),(v!==oA||P!==_)&&(B.polygonOffset(oA,_),v=oA,P=_)):RA(B.POLYGON_OFFSET_FILL)}function yA(H){H?eA(B.SCISSOR_TEST):RA(B.SCISSOR_TEST)}function N(H){H===void 0&&(H=B.TEXTURE0+IA-1),QA!==H&&(B.activeTexture(H),QA=H)}function c(H,oA,_){_===void 0&&(QA===null?_=B.TEXTURE0+IA-1:_=QA);let z=wA[_];z===void 0&&(z={type:void 0,texture:void 0},wA[_]=z),(z.type!==H||z.texture!==oA)&&(QA!==_&&(B.activeTexture(_),QA=_),B.bindTexture(H,oA||lA[H]),z.type=H,z.texture=oA)}function T(){const H=wA[QA];H!==void 0&&H.type!==void 0&&(B.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function X(){try{B.compressedTexImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function AA(){try{B.compressedTexImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{B.texSubImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function GA(){try{B.texSubImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tA(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nA(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function II(){try{B.texStorage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function CA(){try{B.texStorage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function hA(){try{B.texImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function KA(){try{B.texImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pA(H){sI.equals(H)===!1&&(B.scissor(H.x,H.y,H.z,H.w),sI.copy(H))}function rA(H){j.equals(H)===!1&&(B.viewport(H.x,H.y,H.z,H.w),j.copy(H))}function zA(H,oA){let _=e.get(oA);_===void 0&&(_=new WeakMap,e.set(oA,_));let z=_.get(H);z===void 0&&(z=B.getUniformBlockIndex(oA,H.name),_.set(H,z))}function bA(H,oA){const _=e.get(oA).get(H);o.get(oA)!==_&&(B.uniformBlockBinding(oA,_,H.__bindingPointIndex),o.set(oA,_))}function hI(){B.disable(B.BLEND),B.disable(B.CULL_FACE),B.disable(B.DEPTH_TEST),B.disable(B.POLYGON_OFFSET_FILL),B.disable(B.SCISSOR_TEST),B.disable(B.STENCIL_TEST),B.disable(B.SAMPLE_ALPHA_TO_COVERAGE),B.blendEquation(B.FUNC_ADD),B.blendFunc(B.ONE,B.ZERO),B.blendFuncSeparate(B.ONE,B.ZERO,B.ONE,B.ZERO),B.blendColor(0,0,0,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(B.LESS),E.setReversed(!1),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(B.ALWAYS,0,4294967295),B.stencilOp(B.KEEP,B.KEEP,B.KEEP),B.clearStencil(0),B.cullFace(B.BACK),B.frontFace(B.CCW),B.polygonOffset(0,0),B.activeTexture(B.TEXTURE0),B.bindFramebuffer(B.FRAMEBUFFER,null),B.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),B.bindFramebuffer(B.READ_FRAMEBUFFER,null),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),t={},QA=null,wA={},a={},D=new WeakMap,h=[],n=null,w=!1,S=null,r=null,M=null,U=null,k=null,d=null,F=null,K=new FA(0,0,0),q=0,y=!1,G=null,Y=null,O=null,v=null,P=null,sI.set(0,0,B.canvas.width,B.canvas.height),j.set(0,0,B.canvas.width,B.canvas.height),Q.reset(),E.reset(),i.reset()}return{buffers:{color:Q,depth:E,stencil:i},enable:eA,disable:RA,bindFramebuffer:mA,drawBuffers:WA,useProgram:GI,setBlending:p,setMaterial:hg,setFlipSided:VA,setCullFace:XA,setLineWidth:kA,setPolygonOffset:wI,setScissorTest:yA,activeTexture:N,bindTexture:c,unbindTexture:T,compressedTexImage2D:X,compressedTexImage3D:AA,texImage2D:hA,texImage3D:KA,updateUBOMapping:zA,uniformBlockBinding:bA,texStorage2D:II,texStorage3D:CA,texSubImage2D:V,texSubImage3D:GA,compressedTexSubImage2D:tA,compressedTexSubImage3D:nA,scissor:pA,viewport:rA,reset:hI}}function il(B,A,I,g,C,Q,E){const i=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new JA,t=new WeakMap;let a;const D=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function n(N,c){return h?new OffscreenCanvas(N,c):WB("canvas")}function w(N,c,T){let X=1;const AA=yA(N);if((AA.width>T||AA.height>T)&&(X=T/Math.max(AA.width,AA.height)),X<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const V=Math.floor(X*AA.width),GA=Math.floor(X*AA.height);a===void 0&&(a=n(V,GA));const tA=c?n(V,GA):a;return tA.width=V,tA.height=GA,tA.getContext("2d").drawImage(N,0,0,V,GA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+AA.width+"x"+AA.height+") to ("+V+"x"+GA+")."),tA}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+AA.width+"x"+AA.height+")."),N;return N}function S(N){return N.generateMipmaps}function r(N){B.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?B.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?B.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?B.TEXTURE_2D_ARRAY:B.TEXTURE_2D}function U(N,c,T,X,AA=!1){if(N!==null){if(B[N]!==void 0)return B[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let V=c;if(c===B.RED&&(T===B.FLOAT&&(V=B.R32F),T===B.HALF_FLOAT&&(V=B.R16F),T===B.UNSIGNED_BYTE&&(V=B.R8)),c===B.RED_INTEGER&&(T===B.UNSIGNED_BYTE&&(V=B.R8UI),T===B.UNSIGNED_SHORT&&(V=B.R16UI),T===B.UNSIGNED_INT&&(V=B.R32UI),T===B.BYTE&&(V=B.R8I),T===B.SHORT&&(V=B.R16I),T===B.INT&&(V=B.R32I)),c===B.RG&&(T===B.FLOAT&&(V=B.RG32F),T===B.HALF_FLOAT&&(V=B.RG16F),T===B.UNSIGNED_BYTE&&(V=B.RG8)),c===B.RG_INTEGER&&(T===B.UNSIGNED_BYTE&&(V=B.RG8UI),T===B.UNSIGNED_SHORT&&(V=B.RG16UI),T===B.UNSIGNED_INT&&(V=B.RG32UI),T===B.BYTE&&(V=B.RG8I),T===B.SHORT&&(V=B.RG16I),T===B.INT&&(V=B.RG32I)),c===B.RGB_INTEGER&&(T===B.UNSIGNED_BYTE&&(V=B.RGB8UI),T===B.UNSIGNED_SHORT&&(V=B.RGB16UI),T===B.UNSIGNED_INT&&(V=B.RGB32UI),T===B.BYTE&&(V=B.RGB8I),T===B.SHORT&&(V=B.RGB16I),T===B.INT&&(V=B.RGB32I)),c===B.RGBA_INTEGER&&(T===B.UNSIGNED_BYTE&&(V=B.RGBA8UI),T===B.UNSIGNED_SHORT&&(V=B.RGBA16UI),T===B.UNSIGNED_INT&&(V=B.RGBA32UI),T===B.BYTE&&(V=B.RGBA8I),T===B.SHORT&&(V=B.RGBA16I),T===B.INT&&(V=B.RGBA32I)),c===B.RGB&&T===B.UNSIGNED_INT_5_9_9_9_REV&&(V=B.RGB9_E5),c===B.RGBA){const GA=AA?YQ:PA.getTransfer(X);T===B.FLOAT&&(V=B.RGBA32F),T===B.HALF_FLOAT&&(V=B.RGBA16F),T===B.UNSIGNED_BYTE&&(V=GA===oI?B.SRGB8_ALPHA8:B.RGBA8),T===B.UNSIGNED_SHORT_4_4_4_4&&(V=B.RGBA4),T===B.UNSIGNED_SHORT_5_5_5_1&&(V=B.RGB5_A1)}return(V===B.R16F||V===B.R32F||V===B.RG16F||V===B.RG32F||V===B.RGBA16F||V===B.RGBA32F)&&A.get("EXT_color_buffer_float"),V}function k(N,c){let T;return N?c===null||c===NC||c===gB?T=B.DEPTH24_STENCIL8:c===ng?T=B.DEPTH32F_STENCIL8:c===xB&&(T=B.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):c===null||c===NC||c===gB?T=B.DEPTH_COMPONENT24:c===ng?T=B.DEPTH_COMPONENT32F:c===xB&&(T=B.DEPTH_COMPONENT16),T}function d(N,c){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==WI&&N.minFilter!==Ig?Math.log2(Math.max(c.width,c.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?c.mipmaps.length:1}function F(N){const c=N.target;c.removeEventListener("dispose",F),q(c),c.isVideoTexture&&t.delete(c)}function K(N){const c=N.target;c.removeEventListener("dispose",K),G(c)}function q(N){const c=g.get(N);if(c.__webglInit===void 0)return;const T=N.source,X=D.get(T);if(X){const AA=X[c.__cacheKey];AA.usedTimes--,AA.usedTimes===0&&y(N),Object.keys(X).length===0&&D.delete(T)}g.remove(N)}function y(N){const c=g.get(N);B.deleteTexture(c.__webglTexture);const T=N.source,X=D.get(T);delete X[c.__cacheKey],E.memory.textures--}function G(N){const c=g.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),g.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(c.__webglFramebuffer[X]))for(let AA=0;AA<c.__webglFramebuffer[X].length;AA++)B.deleteFramebuffer(c.__webglFramebuffer[X][AA]);else B.deleteFramebuffer(c.__webglFramebuffer[X]);c.__webglDepthbuffer&&B.deleteRenderbuffer(c.__webglDepthbuffer[X])}else{if(Array.isArray(c.__webglFramebuffer))for(let X=0;X<c.__webglFramebuffer.length;X++)B.deleteFramebuffer(c.__webglFramebuffer[X]);else B.deleteFramebuffer(c.__webglFramebuffer);if(c.__webglDepthbuffer&&B.deleteRenderbuffer(c.__webglDepthbuffer),c.__webglMultisampledFramebuffer&&B.deleteFramebuffer(c.__webglMultisampledFramebuffer),c.__webglColorRenderbuffer)for(let X=0;X<c.__webglColorRenderbuffer.length;X++)c.__webglColorRenderbuffer[X]&&B.deleteRenderbuffer(c.__webglColorRenderbuffer[X]);c.__webglDepthRenderbuffer&&B.deleteRenderbuffer(c.__webglDepthRenderbuffer)}const T=N.textures;for(let X=0,AA=T.length;X<AA;X++){const V=g.get(T[X]);V.__webglTexture&&(B.deleteTexture(V.__webglTexture),E.memory.textures--),g.remove(T[X])}g.remove(N)}let Y=0;function O(){Y=0}function v(){const N=Y;return N>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+C.maxTextures),Y+=1,N}function P(N){const c=[];return c.push(N.wrapS),c.push(N.wrapT),c.push(N.wrapR||0),c.push(N.magFilter),c.push(N.minFilter),c.push(N.anisotropy),c.push(N.internalFormat),c.push(N.format),c.push(N.type),c.push(N.generateMipmaps),c.push(N.premultiplyAlpha),c.push(N.flipY),c.push(N.unpackAlignment),c.push(N.colorSpace),c.join()}function IA(N,c){const T=g.get(N);if(N.isVideoTexture&&kA(N),N.isRenderTargetTexture===!1&&N.version>0&&T.__version!==N.version){const X=N.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(T,N,c);return}}I.bindTexture(B.TEXTURE_2D,T.__webglTexture,B.TEXTURE0+c)}function W(N,c){const T=g.get(N);if(N.version>0&&T.__version!==N.version){j(T,N,c);return}I.bindTexture(B.TEXTURE_2D_ARRAY,T.__webglTexture,B.TEXTURE0+c)}function gA(N,c){const T=g.get(N);if(N.version>0&&T.__version!==N.version){j(T,N,c);return}I.bindTexture(B.TEXTURE_3D,T.__webglTexture,B.TEXTURE0+c)}function Z(N,c){const T=g.get(N);if(N.version>0&&T.__version!==N.version){BA(T,N,c);return}I.bindTexture(B.TEXTURE_CUBE_MAP,T.__webglTexture,B.TEXTURE0+c)}const QA={[IB]:B.REPEAT,[tC]:B.CLAMP_TO_EDGE,[KQ]:B.MIRRORED_REPEAT},wA={[WI]:B.NEAREST,[Je]:B.NEAREST_MIPMAP_NEAREST,[TB]:B.NEAREST_MIPMAP_LINEAR,[Ig]:B.LINEAR,[JQ]:B.LINEAR_MIPMAP_NEAREST,[Zg]:B.LINEAR_MIPMAP_LINEAR},HA={[_s]:B.NEVER,[Vs]:B.ALWAYS,[vs]:B.LESS,[_e]:B.LEQUAL,[Zs]:B.EQUAL,[js]:B.GEQUAL,[Ws]:B.GREATER,[Ps]:B.NOTEQUAL};function ZA(N,c){if(c.type===ng&&A.has("OES_texture_float_linear")===!1&&(c.magFilter===Ig||c.magFilter===JQ||c.magFilter===TB||c.magFilter===Zg||c.minFilter===Ig||c.minFilter===JQ||c.minFilter===TB||c.minFilter===Zg)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B.texParameteri(N,B.TEXTURE_WRAP_S,QA[c.wrapS]),B.texParameteri(N,B.TEXTURE_WRAP_T,QA[c.wrapT]),(N===B.TEXTURE_3D||N===B.TEXTURE_2D_ARRAY)&&B.texParameteri(N,B.TEXTURE_WRAP_R,QA[c.wrapR]),B.texParameteri(N,B.TEXTURE_MAG_FILTER,wA[c.magFilter]),B.texParameteri(N,B.TEXTURE_MIN_FILTER,wA[c.minFilter]),c.compareFunction&&(B.texParameteri(N,B.TEXTURE_COMPARE_MODE,B.COMPARE_REF_TO_TEXTURE),B.texParameteri(N,B.TEXTURE_COMPARE_FUNC,HA[c.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(c.magFilter===WI||c.minFilter!==TB&&c.minFilter!==Zg||c.type===ng&&A.has("OES_texture_float_linear")===!1)return;if(c.anisotropy>1||g.get(c).__currentAnisotropy){const T=A.get("EXT_texture_filter_anisotropic");B.texParameterf(N,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c.anisotropy,C.getMaxAnisotropy())),g.get(c).__currentAnisotropy=c.anisotropy}}}function sI(N,c){let T=!1;N.__webglInit===void 0&&(N.__webglInit=!0,c.addEventListener("dispose",F));const X=c.source;let AA=D.get(X);AA===void 0&&(AA={},D.set(X,AA));const V=P(c);if(V!==N.__cacheKey){AA[V]===void 0&&(AA[V]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,T=!0),AA[V].usedTimes++;const GA=AA[N.__cacheKey];GA!==void 0&&(AA[N.__cacheKey].usedTimes--,GA.usedTimes===0&&y(c)),N.__cacheKey=V,N.__webglTexture=AA[V].texture}return T}function j(N,c,T){let X=B.TEXTURE_2D;(c.isDataArrayTexture||c.isCompressedArrayTexture)&&(X=B.TEXTURE_2D_ARRAY),c.isData3DTexture&&(X=B.TEXTURE_3D);const AA=sI(N,c),V=c.source;I.bindTexture(X,N.__webglTexture,B.TEXTURE0+T);const GA=g.get(V);if(V.version!==GA.__version||AA===!0){I.activeTexture(B.TEXTURE0+T);const tA=PA.getPrimaries(PA.workingColorSpace),nA=c.colorSpace===aC?null:PA.getPrimaries(c.colorSpace),II=c.colorSpace===aC||tA===nA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,c.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,c.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,II);let CA=w(c.image,!1,C.maxTextureSize);CA=wI(c,CA);const hA=Q.convert(c.format,c.colorSpace),KA=Q.convert(c.type);let pA=U(c.internalFormat,hA,KA,c.colorSpace,c.isVideoTexture);ZA(X,c);let rA;const zA=c.mipmaps,bA=c.isVideoTexture!==!0,hI=GA.__version===void 0||AA===!0,H=V.dataReady,oA=d(c,CA);if(c.isDepthTexture)pA=k(c.format===BB,c.type),hI&&(bA?I.texStorage2D(B.TEXTURE_2D,1,pA,CA.width,CA.height):I.texImage2D(B.TEXTURE_2D,0,pA,CA.width,CA.height,0,hA,KA,null));else if(c.isDataTexture)if(zA.length>0){bA&&hI&&I.texStorage2D(B.TEXTURE_2D,oA,pA,zA[0].width,zA[0].height);for(let _=0,z=zA.length;_<z;_++)rA=zA[_],bA?H&&I.texSubImage2D(B.TEXTURE_2D,_,0,0,rA.width,rA.height,hA,KA,rA.data):I.texImage2D(B.TEXTURE_2D,_,pA,rA.width,rA.height,0,hA,KA,rA.data);c.generateMipmaps=!1}else bA?(hI&&I.texStorage2D(B.TEXTURE_2D,oA,pA,CA.width,CA.height),H&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,CA.width,CA.height,hA,KA,CA.data)):I.texImage2D(B.TEXTURE_2D,0,pA,CA.width,CA.height,0,hA,KA,CA.data);else if(c.isCompressedTexture)if(c.isCompressedArrayTexture){bA&&hI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,oA,pA,zA[0].width,zA[0].height,CA.depth);for(let _=0,z=zA.length;_<z;_++)if(rA=zA[_],c.format!==eg)if(hA!==null)if(bA){if(H)if(c.layerUpdates.size>0){const aA=$t(rA.width,rA.height,c.format,c.type);for(const EA of c.layerUpdates){const $A=rA.data.subarray(EA*aA/rA.data.BYTES_PER_ELEMENT,(EA+1)*aA/rA.data.BYTES_PER_ELEMENT);I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,_,0,0,EA,rA.width,rA.height,1,hA,$A)}c.clearLayerUpdates()}else I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,_,0,0,0,rA.width,rA.height,CA.depth,hA,rA.data)}else I.compressedTexImage3D(B.TEXTURE_2D_ARRAY,_,pA,rA.width,rA.height,CA.depth,0,rA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bA?H&&I.texSubImage3D(B.TEXTURE_2D_ARRAY,_,0,0,0,rA.width,rA.height,CA.depth,hA,KA,rA.data):I.texImage3D(B.TEXTURE_2D_ARRAY,_,pA,rA.width,rA.height,CA.depth,0,hA,KA,rA.data)}else{bA&&hI&&I.texStorage2D(B.TEXTURE_2D,oA,pA,zA[0].width,zA[0].height);for(let _=0,z=zA.length;_<z;_++)rA=zA[_],c.format!==eg?hA!==null?bA?H&&I.compressedTexSubImage2D(B.TEXTURE_2D,_,0,0,rA.width,rA.height,hA,rA.data):I.compressedTexImage2D(B.TEXTURE_2D,_,pA,rA.width,rA.height,0,rA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bA?H&&I.texSubImage2D(B.TEXTURE_2D,_,0,0,rA.width,rA.height,hA,KA,rA.data):I.texImage2D(B.TEXTURE_2D,_,pA,rA.width,rA.height,0,hA,KA,rA.data)}else if(c.isDataArrayTexture)if(bA){if(hI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,oA,pA,CA.width,CA.height,CA.depth),H)if(c.layerUpdates.size>0){const _=$t(CA.width,CA.height,c.format,c.type);for(const z of c.layerUpdates){const aA=CA.data.subarray(z*_/CA.data.BYTES_PER_ELEMENT,(z+1)*_/CA.data.BYTES_PER_ELEMENT);I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,z,CA.width,CA.height,1,hA,KA,aA)}c.clearLayerUpdates()}else I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,0,CA.width,CA.height,CA.depth,hA,KA,CA.data)}else I.texImage3D(B.TEXTURE_2D_ARRAY,0,pA,CA.width,CA.height,CA.depth,0,hA,KA,CA.data);else if(c.isData3DTexture)bA?(hI&&I.texStorage3D(B.TEXTURE_3D,oA,pA,CA.width,CA.height,CA.depth),H&&I.texSubImage3D(B.TEXTURE_3D,0,0,0,0,CA.width,CA.height,CA.depth,hA,KA,CA.data)):I.texImage3D(B.TEXTURE_3D,0,pA,CA.width,CA.height,CA.depth,0,hA,KA,CA.data);else if(c.isFramebufferTexture){if(hI)if(bA)I.texStorage2D(B.TEXTURE_2D,oA,pA,CA.width,CA.height);else{let _=CA.width,z=CA.height;for(let aA=0;aA<oA;aA++)I.texImage2D(B.TEXTURE_2D,aA,pA,_,z,0,hA,KA,null),_>>=1,z>>=1}}else if(zA.length>0){if(bA&&hI){const _=yA(zA[0]);I.texStorage2D(B.TEXTURE_2D,oA,pA,_.width,_.height)}for(let _=0,z=zA.length;_<z;_++)rA=zA[_],bA?H&&I.texSubImage2D(B.TEXTURE_2D,_,0,0,hA,KA,rA):I.texImage2D(B.TEXTURE_2D,_,pA,hA,KA,rA);c.generateMipmaps=!1}else if(bA){if(hI){const _=yA(CA);I.texStorage2D(B.TEXTURE_2D,oA,pA,_.width,_.height)}H&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,hA,KA,CA)}else I.texImage2D(B.TEXTURE_2D,0,pA,hA,KA,CA);S(c)&&r(X),GA.__version=V.version,c.onUpdate&&c.onUpdate(c)}N.__version=c.version}function BA(N,c,T){if(c.image.length!==6)return;const X=sI(N,c),AA=c.source;I.bindTexture(B.TEXTURE_CUBE_MAP,N.__webglTexture,B.TEXTURE0+T);const V=g.get(AA);if(AA.version!==V.__version||X===!0){I.activeTexture(B.TEXTURE0+T);const GA=PA.getPrimaries(PA.workingColorSpace),tA=c.colorSpace===aC?null:PA.getPrimaries(c.colorSpace),nA=c.colorSpace===aC||GA===tA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,c.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,c.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,nA);const II=c.isCompressedTexture||c.image[0].isCompressedTexture,CA=c.image[0]&&c.image[0].isDataTexture,hA=[];for(let z=0;z<6;z++)!II&&!CA?hA[z]=w(c.image[z],!0,C.maxCubemapSize):hA[z]=CA?c.image[z].image:c.image[z],hA[z]=wI(c,hA[z]);const KA=hA[0],pA=Q.convert(c.format,c.colorSpace),rA=Q.convert(c.type),zA=U(c.internalFormat,pA,rA,c.colorSpace),bA=c.isVideoTexture!==!0,hI=V.__version===void 0||X===!0,H=AA.dataReady;let oA=d(c,KA);ZA(B.TEXTURE_CUBE_MAP,c);let _;if(II){bA&&hI&&I.texStorage2D(B.TEXTURE_CUBE_MAP,oA,zA,KA.width,KA.height);for(let z=0;z<6;z++){_=hA[z].mipmaps;for(let aA=0;aA<_.length;aA++){const EA=_[aA];c.format!==eg?pA!==null?bA?H&&I.compressedTexSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,0,0,EA.width,EA.height,pA,EA.data):I.compressedTexImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,zA,EA.width,EA.height,0,EA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,0,0,EA.width,EA.height,pA,rA,EA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,zA,EA.width,EA.height,0,pA,rA,EA.data)}}}else{if(_=c.mipmaps,bA&&hI){_.length>0&&oA++;const z=yA(hA[0]);I.texStorage2D(B.TEXTURE_CUBE_MAP,oA,zA,z.width,z.height)}for(let z=0;z<6;z++)if(CA){bA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,hA[z].width,hA[z].height,pA,rA,hA[z].data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,zA,hA[z].width,hA[z].height,0,pA,rA,hA[z].data);for(let aA=0;aA<_.length;aA++){const EA=_[aA].image[z].image;bA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,0,0,EA.width,EA.height,pA,rA,EA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,zA,EA.width,EA.height,0,pA,rA,EA.data)}}else{bA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,pA,rA,hA[z]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,zA,pA,rA,hA[z]);for(let aA=0;aA<_.length;aA++){const EA=_[aA];bA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,0,0,pA,rA,EA.image[z]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,zA,pA,rA,EA.image[z])}}}S(c)&&r(B.TEXTURE_CUBE_MAP),V.__version=AA.version,c.onUpdate&&c.onUpdate(c)}N.__version=c.version}function lA(N,c,T,X,AA,V){const GA=Q.convert(T.format,T.colorSpace),tA=Q.convert(T.type),nA=U(T.internalFormat,GA,tA,T.colorSpace),II=g.get(c),CA=g.get(T);if(CA.__renderTarget=c,!II.__hasExternalTextures){const hA=Math.max(1,c.width>>V),KA=Math.max(1,c.height>>V);AA===B.TEXTURE_3D||AA===B.TEXTURE_2D_ARRAY?I.texImage3D(AA,V,nA,hA,KA,c.depth,0,GA,tA,null):I.texImage2D(AA,V,nA,hA,KA,0,GA,tA,null)}I.bindFramebuffer(B.FRAMEBUFFER,N),XA(c)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,X,AA,CA.__webglTexture,0,VA(c)):(AA===B.TEXTURE_2D||AA>=B.TEXTURE_CUBE_MAP_POSITIVE_X&&AA<=B.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&B.framebufferTexture2D(B.FRAMEBUFFER,X,AA,CA.__webglTexture,V),I.bindFramebuffer(B.FRAMEBUFFER,null)}function eA(N,c,T){if(B.bindRenderbuffer(B.RENDERBUFFER,N),c.depthBuffer){const X=c.depthTexture,AA=X&&X.isDepthTexture?X.type:null,V=k(c.stencilBuffer,AA),GA=c.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,tA=VA(c);XA(c)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,tA,V,c.width,c.height):T?B.renderbufferStorageMultisample(B.RENDERBUFFER,tA,V,c.width,c.height):B.renderbufferStorage(B.RENDERBUFFER,V,c.width,c.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,GA,B.RENDERBUFFER,N)}else{const X=c.textures;for(let AA=0;AA<X.length;AA++){const V=X[AA],GA=Q.convert(V.format,V.colorSpace),tA=Q.convert(V.type),nA=U(V.internalFormat,GA,tA,V.colorSpace),II=VA(c);T&&XA(c)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,II,nA,c.width,c.height):XA(c)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,II,nA,c.width,c.height):B.renderbufferStorage(B.RENDERBUFFER,nA,c.width,c.height)}}B.bindRenderbuffer(B.RENDERBUFFER,null)}function RA(N,c){if(c&&c.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(B.FRAMEBUFFER,N),!(c.depthTexture&&c.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const T=g.get(c.depthTexture);T.__renderTarget=c,(!T.__webglTexture||c.depthTexture.image.width!==c.width||c.depthTexture.image.height!==c.height)&&(c.depthTexture.image.width=c.width,c.depthTexture.image.height=c.height,c.depthTexture.needsUpdate=!0),IA(c.depthTexture,0);const X=T.__webglTexture,AA=VA(c);if(c.depthTexture.format===CB)XA(c)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,X,0,AA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,X,0);else if(c.depthTexture.format===BB)XA(c)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,X,0,AA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function mA(N){const c=g.get(N),T=N.isWebGLCubeRenderTarget===!0;if(c.__boundDepthTexture!==N.depthTexture){const X=N.depthTexture;if(c.__depthDisposeCallback&&c.__depthDisposeCallback(),X){const AA=()=>{delete c.__boundDepthTexture,delete c.__depthDisposeCallback,X.removeEventListener("dispose",AA)};X.addEventListener("dispose",AA),c.__depthDisposeCallback=AA}c.__boundDepthTexture=X}if(N.depthTexture&&!c.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");RA(c.__webglFramebuffer,N)}else if(T){c.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(I.bindFramebuffer(B.FRAMEBUFFER,c.__webglFramebuffer[X]),c.__webglDepthbuffer[X]===void 0)c.__webglDepthbuffer[X]=B.createRenderbuffer(),eA(c.__webglDepthbuffer[X],N,!1);else{const AA=N.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,V=c.__webglDepthbuffer[X];B.bindRenderbuffer(B.RENDERBUFFER,V),B.framebufferRenderbuffer(B.FRAMEBUFFER,AA,B.RENDERBUFFER,V)}}else if(I.bindFramebuffer(B.FRAMEBUFFER,c.__webglFramebuffer),c.__webglDepthbuffer===void 0)c.__webglDepthbuffer=B.createRenderbuffer(),eA(c.__webglDepthbuffer,N,!1);else{const X=N.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,AA=c.__webglDepthbuffer;B.bindRenderbuffer(B.RENDERBUFFER,AA),B.framebufferRenderbuffer(B.FRAMEBUFFER,X,B.RENDERBUFFER,AA)}I.bindFramebuffer(B.FRAMEBUFFER,null)}function WA(N,c,T){const X=g.get(N);c!==void 0&&lA(X.__webglFramebuffer,N,N.texture,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,0),T!==void 0&&mA(N)}function GI(N){const c=N.texture,T=g.get(N),X=g.get(c);N.addEventListener("dispose",K);const AA=N.textures,V=N.isWebGLCubeRenderTarget===!0,GA=AA.length>1;if(GA||(X.__webglTexture===void 0&&(X.__webglTexture=B.createTexture()),X.__version=c.version,E.memory.textures++),V){T.__webglFramebuffer=[];for(let tA=0;tA<6;tA++)if(c.mipmaps&&c.mipmaps.length>0){T.__webglFramebuffer[tA]=[];for(let nA=0;nA<c.mipmaps.length;nA++)T.__webglFramebuffer[tA][nA]=B.createFramebuffer()}else T.__webglFramebuffer[tA]=B.createFramebuffer()}else{if(c.mipmaps&&c.mipmaps.length>0){T.__webglFramebuffer=[];for(let tA=0;tA<c.mipmaps.length;tA++)T.__webglFramebuffer[tA]=B.createFramebuffer()}else T.__webglFramebuffer=B.createFramebuffer();if(GA)for(let tA=0,nA=AA.length;tA<nA;tA++){const II=g.get(AA[tA]);II.__webglTexture===void 0&&(II.__webglTexture=B.createTexture(),E.memory.textures++)}if(N.samples>0&&XA(N)===!1){T.__webglMultisampledFramebuffer=B.createFramebuffer(),T.__webglColorRenderbuffer=[],I.bindFramebuffer(B.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let tA=0;tA<AA.length;tA++){const nA=AA[tA];T.__webglColorRenderbuffer[tA]=B.createRenderbuffer(),B.bindRenderbuffer(B.RENDERBUFFER,T.__webglColorRenderbuffer[tA]);const II=Q.convert(nA.format,nA.colorSpace),CA=Q.convert(nA.type),hA=U(nA.internalFormat,II,CA,nA.colorSpace,N.isXRRenderTarget===!0),KA=VA(N);B.renderbufferStorageMultisample(B.RENDERBUFFER,KA,hA,N.width,N.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+tA,B.RENDERBUFFER,T.__webglColorRenderbuffer[tA])}B.bindRenderbuffer(B.RENDERBUFFER,null),N.depthBuffer&&(T.__webglDepthRenderbuffer=B.createRenderbuffer(),eA(T.__webglDepthRenderbuffer,N,!0)),I.bindFramebuffer(B.FRAMEBUFFER,null)}}if(V){I.bindTexture(B.TEXTURE_CUBE_MAP,X.__webglTexture),ZA(B.TEXTURE_CUBE_MAP,c);for(let tA=0;tA<6;tA++)if(c.mipmaps&&c.mipmaps.length>0)for(let nA=0;nA<c.mipmaps.length;nA++)lA(T.__webglFramebuffer[tA][nA],N,c,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+tA,nA);else lA(T.__webglFramebuffer[tA],N,c,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+tA,0);S(c)&&r(B.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(GA){for(let tA=0,nA=AA.length;tA<nA;tA++){const II=AA[tA],CA=g.get(II);I.bindTexture(B.TEXTURE_2D,CA.__webglTexture),ZA(B.TEXTURE_2D,II),lA(T.__webglFramebuffer,N,II,B.COLOR_ATTACHMENT0+tA,B.TEXTURE_2D,0),S(II)&&r(B.TEXTURE_2D)}I.unbindTexture()}else{let tA=B.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(tA=N.isWebGL3DRenderTarget?B.TEXTURE_3D:B.TEXTURE_2D_ARRAY),I.bindTexture(tA,X.__webglTexture),ZA(tA,c),c.mipmaps&&c.mipmaps.length>0)for(let nA=0;nA<c.mipmaps.length;nA++)lA(T.__webglFramebuffer[nA],N,c,B.COLOR_ATTACHMENT0,tA,nA);else lA(T.__webglFramebuffer,N,c,B.COLOR_ATTACHMENT0,tA,0);S(c)&&r(tA),I.unbindTexture()}N.depthBuffer&&mA(N)}function AI(N){const c=N.textures;for(let T=0,X=c.length;T<X;T++){const AA=c[T];if(S(AA)){const V=M(N),GA=g.get(AA).__webglTexture;I.bindTexture(V,GA),r(V),I.unbindTexture()}}}const MI=[],p=[];function hg(N){if(N.samples>0){if(XA(N)===!1){const c=N.textures,T=N.width,X=N.height;let AA=B.COLOR_BUFFER_BIT;const V=N.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,GA=g.get(N),tA=c.length>1;if(tA)for(let nA=0;nA<c.length;nA++)I.bindFramebuffer(B.FRAMEBUFFER,GA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+nA,B.RENDERBUFFER,null),I.bindFramebuffer(B.FRAMEBUFFER,GA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+nA,B.TEXTURE_2D,null,0);I.bindFramebuffer(B.READ_FRAMEBUFFER,GA.__webglMultisampledFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,GA.__webglFramebuffer);for(let nA=0;nA<c.length;nA++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(AA|=B.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(AA|=B.STENCIL_BUFFER_BIT)),tA){B.framebufferRenderbuffer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.RENDERBUFFER,GA.__webglColorRenderbuffer[nA]);const II=g.get(c[nA]).__webglTexture;B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,II,0)}B.blitFramebuffer(0,0,T,X,0,0,T,X,AA,B.NEAREST),o===!0&&(MI.length=0,p.length=0,MI.push(B.COLOR_ATTACHMENT0+nA),N.depthBuffer&&N.resolveDepthBuffer===!1&&(MI.push(V),p.push(V),B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,p)),B.invalidateFramebuffer(B.READ_FRAMEBUFFER,MI))}if(I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),tA)for(let nA=0;nA<c.length;nA++){I.bindFramebuffer(B.FRAMEBUFFER,GA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+nA,B.RENDERBUFFER,GA.__webglColorRenderbuffer[nA]);const II=g.get(c[nA]).__webglTexture;I.bindFramebuffer(B.FRAMEBUFFER,GA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+nA,B.TEXTURE_2D,II,0)}I.bindFramebuffer(B.DRAW_FRAMEBUFFER,GA.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&o){const c=N.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT;B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,[c])}}}function VA(N){return Math.min(C.maxSamples,N.samples)}function XA(N){const c=g.get(N);return N.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&c.__useRenderToTexture!==!1}function kA(N){const c=E.render.frame;t.get(N)!==c&&(t.set(N,c),N.update())}function wI(N,c){const T=N.colorSpace,X=N.format,AA=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||T!==PI&&T!==aC&&(PA.getTransfer(T)===oI?(X!==eg||AA!==Wg)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),c}function yA(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(e.width=N.naturalWidth||N.width,e.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(e.width=N.displayWidth,e.height=N.displayHeight):(e.width=N.width,e.height=N.height),e}this.allocateTextureUnit=v,this.resetTextureUnits=O,this.setTexture2D=IA,this.setTexture2DArray=W,this.setTexture3D=gA,this.setTextureCube=Z,this.rebindTextures=WA,this.setupRenderTarget=GI,this.updateRenderTargetMipmap=AI,this.updateMultisampleRenderTarget=hg,this.setupDepthRenderbuffer=mA,this.setupFrameBufferTexture=lA,this.useMultisampledRTT=XA}function ol(B,A){function I(g,C=aC){let Q;const E=PA.getTransfer(C);if(g===Wg)return B.UNSIGNED_BYTE;if(g===PE)return B.UNSIGNED_SHORT_4_4_4_4;if(g===jE)return B.UNSIGNED_SHORT_5_5_5_1;if(g===pe)return B.UNSIGNED_INT_5_9_9_9_REV;if(g===Fe)return B.BYTE;if(g===Re)return B.SHORT;if(g===xB)return B.UNSIGNED_SHORT;if(g===WE)return B.INT;if(g===NC)return B.UNSIGNED_INT;if(g===ng)return B.FLOAT;if(g===bB)return B.HALF_FLOAT;if(g===de)return B.ALPHA;if(g===qe)return B.RGB;if(g===eg)return B.RGBA;if(g===Ye)return B.LUMINANCE;if(g===Le)return B.LUMINANCE_ALPHA;if(g===CB)return B.DEPTH_COMPONENT;if(g===BB)return B.DEPTH_STENCIL;if(g===VE)return B.RED;if(g===XE)return B.RED_INTEGER;if(g===ue)return B.RG;if(g===zE)return B.RG_INTEGER;if(g===$E)return B.RGBA_INTEGER;if(g===FQ||g===RQ||g===pQ||g===dQ)if(E===oI)if(Q=A.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(g===FQ)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===RQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===pQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===dQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=A.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(g===FQ)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===RQ)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===pQ)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===dQ)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===Ai||g===Ii||g===gi||g===Ci)if(Q=A.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(g===Ai)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===Ii)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===gi)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===Ci)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===Bi||g===Qi||g===Ei)if(Q=A.get("WEBGL_compressed_texture_etc"),Q!==null){if(g===Bi||g===Qi)return E===oI?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(g===Ei)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===ii||g===oi||g===ei||g===ti||g===ai||g===Di||g===si||g===hi||g===ri||g===Si||g===ni||g===wi||g===ci||g===li)if(Q=A.get("WEBGL_compressed_texture_astc"),Q!==null){if(g===ii)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===oi)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===ei)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===ti)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===ai)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===Di)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===si)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===hi)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===ri)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===Si)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===ni)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===wi)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===ci)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===li)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===qQ||g===Gi||g===ki)if(Q=A.get("EXT_texture_compression_bptc"),Q!==null){if(g===qQ)return E===oI?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===Gi)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===ki)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===He||g===yi||g===Ui||g===Mi)if(Q=A.get("EXT_texture_compression_rgtc"),Q!==null){if(g===qQ)return Q.COMPRESSED_RED_RGTC1_EXT;if(g===yi)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===Ui)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===Mi)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===gB?B.UNSIGNED_INT_24_8:B[g]!==void 0?B[g]:null}return{convert:I}}const el={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new YC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new YC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new YC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const w of A.hand.values()){const S=I.getJointPose(w,g),r=this._getHandJoint(e,w);S!==null&&(r.matrix.fromArray(S.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,r.jointRadius=S.radius),r.visible=S!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],D=t.position.distanceTo(a.position),h=.02,n=.005;e.inputState.pinching&&D>h+n?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&D<=h-n&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(el)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new YC;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const tl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,al=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}
