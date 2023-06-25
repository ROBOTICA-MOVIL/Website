clc
close all
clear all 
clc 
wb=waitbar(0, '-', 'Name', 'Espera..', 'CreateCancelBtn','delete(gcbf)');
i=0;
data_postura=[];
while true
    hwInfo = imaqhwinfo('kinect');
    hwInfo.DeviceInfo(1);
    hwInfo.DeviceInfo(2);
    colorVid = videoinput('kinect',1);
    depthVid = videoinput('kinect',2);
    colorvid.timeout=0.01;
    triggerconfig([colorVid depthVid],'manual');
    colorVid.FramesPerTrigger = 1;
    depthVid.FramesPerTrigger = 1;
    start([colorVid depthVid]);
    % Trigger the devices to start logging of data.
    trigger([colorVid depthVid]);
    % Retrieve the acquired data
    [colorFrameData,colorTimeData,colorMetaData] = getdata(colorVid);
    [depthFrameData,depthTimeData,depthMetaData] = getdata(depthVid);
    % Stop the devices
    %stop([colorVid depthVid]);
    % Pull out the 95th color frame
    img0=colorFrameData(:, :, :, 1);             % para tomar capturas con la camara
    img=imsubtract(img0(:,:,1),rgb2gray(img0));  % generar una imagen en escala de grises y sustraer solo los objetos que tienen el color azul
    % si se quiere hacer el seguimiento de objetos de color rojo se
    % modifica el comando anterior colocando 1
    bw=im2bw(img,0.13);                         % para binarizar la imagen
    bw=medfilt2(bw);                            % para aplicar un filtro 
    bw=imopen(bw,strel('disk',1));   
    bw=bwareaopen(bw,500);                     %para eliminar los objetos menores a 3000 pixeles
    bw=imfill(bw, 'holes');                     % para eliminar los espacios dentro de los objetos que reconoce la camara
    [L,N]=bwlabel(bw);                          % para agregar etiquetas a los objetos identificados, esto se guarda en la variable L, y en la variable N se guardan la cantidad de objetos idetificados
    prop=regionprops(L);                        % para obtener las propiedades de los elementos identificados
    imshow(img0);  % para mostrar las capturas
    for n=1:N
        % las coordenadas del origen detectado por la camra corresponden a
        % la esquina superior izquierda
        c=round(prop(n).Centroid);             % para obtener el centroid
        rectangle('Position', prop(n).BoundingBox,'EdgeColor','g','LineWidth',2)        % para hacer un rectangulo de color verde sobre el objeto
        text(c(1),c(2),strcat('X:',num2str(c(1)),'Y:',num2str(c(2))),'Color','green');  % para agregar las coordenadas
        %num2str: comando para pasar de un dato tipo numero a uno tipo
        %caracter
        %strcat: comando para concatenar una cadena de caracteres
        %horizontalmente 
        xp(n)=c(1);
        yp(n)=c(2);
        
    end
    Points=[xp;yp];
    i=1;
    currentpoint=Points(:,i);
    distance=currentpoint-Points;
    d=diag(sqrt(distance'*distance));
    [row, col,outs]=find(d);
    error=max(outs)-min(outs);
    if error<5
        print('yes');
        head=Points(:,i);
        index=i;
    else
        print('not');
        head=Points(:,find(d==max(d)));
        index=find(d==max(d));
    end
    indices=[1 2 3];
    indices=find(indices~=index);
    vector_direction=head-(Points(:,indices(1))+Points(:,indices(2)))/2;
    or_cam=atan2(vector_direction(2)*(250/480),vector_direction(1)*(341/640));
    x_cam=head(1);
    y_cam=head(2);
    disp('--------------------------------------------------------------')
    disp('X    Y    Orientacion')
    disp([x_cam*(341/640) y_cam*(250/480) or_cam*180/pi])
    data_postura=[data_postura;[x_cam*(341/640) y_cam*(250/480) or_cam*180/pi]];
    if ~ishandle(wb)
        break                                  % si se cancela el proceso, desde la barra de espera se sale del ciclo while
    else
        waitbar(i/10,wb,['num:' num2str(i)]); % la barra de espera se llena durante 10 iteraciones y cuenta las iteraciones que hace dentro del ciclo while
    end
    i=i+1;
    pause(0.001);
end