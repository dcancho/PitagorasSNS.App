<template>
    <div class="new-post-input">
        <TabView class="tab-view">
            <TabPanel header="Write">
                <div class="tab-panel input-panel">
                    <InputText class="text-area" placeholder="Catchy title in here" v-model="title" />
                    <Textarea class="text-area" placeholder="Use Markdown here to style your post!" v-model="value" rows="8" />
                </div>
            </TabPanel>
            <TabPanel header="Preview">
                <div class="tab-panel">
                    <h1 v-html="title"></h1>
                    <div class="text-area text-preview" v-html="markdownContent"></div>
                </div>
            </TabPanel>
        </TabView>
        <!--div class="file-upload">
          <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*"
              :maxFileSize="1000000">
              <template #empty>
                  <p>Drag and drop files to here to upload.</p>
              </template>
          </FileUpload>
      </div-->
        <Button label="Post" @click="postPost" />
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { ref, computed } from 'vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import MarkdownIt from 'markdown-it';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DOMPurify from 'dompurify';
import axios from 'axios';

const value = ref('');
const title = ref('');
const md = new MarkdownIt();

const markdownContent = computed(() => {
    const rawHtml = md.render(value.value);
    return DOMPurify.sanitize(rawHtml);
});

const postPost = async () => {
  if (value.value) {
    const payload = {
      title: title.value,
      attachedMedia: [],
      content: value.value,
      authorCode: localStorage.getItem('userCode'),
    };

    try {
      await axios.post('http://20.163.79.122:80/api/v1/Post', payload);
      value.value = '';
        title.value = '';
    } catch (error) {
      console.error('Error:', error);
    }
  }
};
</script>

<style>
.input-panel {
    display: flex;
    flex-direction: column;
    gap: 1rem;

}

.new-post-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

.text-area {
    width: 100%;
}

.file-upload {
    width: 100%;
}

.tab-view {
    width: 100%;
}

.tab-panel {
    width: 100%;
    box-sizing: border-box;
}

.text-preview {
    border: 1px solid var(--surface-d);
    border-radius: 0.5rem;
    padding-right: 1rem;
    padding-left: 1rem;
    min-height: 12rem;
    max-height: 15rem;
    overflow-y: auto;
    box-sizing: border-box;
}
</style>