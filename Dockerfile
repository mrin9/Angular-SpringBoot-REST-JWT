# First stage - Build the Java application
FROM openjdk:8-jdk as java-build

# Set the working directory for the Java build
WORKDIR /app

# Copy the Java project files
COPY . .

# Install Gradle
ARG GRADLE_VERSION=3.4.1
RUN wget https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip -P /tmp && \
    unzip -d /opt/gradle /tmp/gradle-${GRADLE_VERSION}-bin.zip && \
    rm /tmp/gradle-${GRADLE_VERSION}-bin.zip

# Add Gradle to the PATH environment variable
ENV GRADLE_HOME=/opt/gradle/gradle-${GRADLE_VERSION}
ENV PATH=${GRADLE_HOME}/bin:${PATH}

# Initialize Gradle wrapper and build the Java project
RUN gradle wrapper && \
    ./gradlew build -x test

# Second stage - Build the Angular application
FROM node:14 as angular-build

# Set working directory for Angular build
WORKDIR /webui

# Copy the Angular project files from the first stage
COPY --from=java-build /app/webui .

# Install npm dependencies for Angular
RUN npm install
RUN npm install -g @angular/cli@1.6.6

# Build the Angular project
RUN ng build

# Final stage - Prepare the runtime image
FROM openjdk:8-jdk

# Expose the port the app runs on
EXPOSE 8080

# Set the working directory for the final image
WORKDIR /app

# Copy the built jar file from the Java build stage
COPY --from=java-build /app/build/libs/*.jar app.jar

# Copy the built Angular application from the Angular build stage
COPY --from=angular-build /webui/dist /app/webui/dist


# Set the entry point of the container
# Set the default command to execute when creating a new container

CMD ["java", "-jar", "/app/app.jar"]

