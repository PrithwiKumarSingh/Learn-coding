#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>
#include <stdlib.h>

sem_t mutex;
sem_t wrt;
sem_t queue;

int readCount = 0;

void* reader(void* arg) {
    int id = *((int*)arg);

    sem_wait(&queue);
    sem_wait(&mutex);

    readCount++;
    if (readCount == 1)
        sem_wait(&wrt);

    sem_post(&mutex);
    sem_post(&queue);

    printf("Reader %d is reading\n", id);
    sleep(1);

    sem_wait(&mutex);
    readCount--;

    if (readCount == 0)
        sem_post(&wrt);

    sem_post(&mutex);

    return NULL;
}

void* writer(void* arg) {
    int id = *((int*)arg);

    sem_wait(&queue);
    sem_wait(&wrt);

    printf("Writer %d is writing\n", id);
    sleep(2);

    sem_post(&wrt);
    sem_post(&queue);

    return NULL;
}

int main() {
    int n_readers, n_writers;

    printf("Enter number of readers: ");
    scanf("%d", &n_readers);



    printf("Enter number of writers: ");
    scanf("%d", &n_writers);

    

    pthread_t *r = (pthread_t*)malloc(n_readers * sizeof(pthread_t));
    pthread_t *w = (pthread_t*)malloc(n_writers * sizeof(pthread_t));

    int *r_id = (int*)malloc(n_readers * sizeof(int));
    int *w_id = (int*)malloc(n_writers * sizeof(int));

    sem_init(&mutex, 0, 1);
    sem_init(&wrt, 0, 1);
    sem_init(&queue, 0, 1);

    for (int i = 0; i < n_readers; i++) {
        r_id[i] = i + 1;
        pthread_create(&r[i], NULL, reader, &r_id[i]);
    }

    for (int i = 0; i < n_writers; i++) {
        w_id[i] = i + 1;
        pthread_create(&w[i], NULL, writer, &w_id[i]);
    }

    for (int i = 0; i < n_readers; i++) {
        pthread_join(r[i], NULL);
    }

    for (int i = 0; i < n_writers; i++) {
        pthread_join(w[i], NULL);
    }

    sem_destroy(&mutex);
    sem_destroy(&wrt);
    sem_destroy(&queue);

    free(r);
    free(w);
    free(r_id);
    free(w_id);

    printf("\nExecution completed.\n");

    return 0;
}
